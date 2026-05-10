"use client";
import { status_data, prs } from "@/lib/data/status-data";
import { type TrackedPRWithSummary, type PRStatus } from "@/types/index";
import { Plus } from "lucide-react";
import { useState } from "react";

const columns = ["open", "stale", "merged", "closed"];

function PRMiniCard(pr: TrackedPRWithSummary) {
  return (
    <div
      key={pr.id}
      className="text-sm border-1 border-border rounded-lg p-3 hover:bg-hover hover:cursor-pointer"
    >
      <div className="font-medium text-foreground">{pr.title}</div>
      <div className="text-muted-foreground pb-2">
        <div className="py-2">{`#${pr.pr_number} - ${pr.repo_name}`}</div>
      </div>
      <hr className="" />
      <div className="text-muted-foreground pt-2">
        {pr.summary?.summary_json.current_state}
      </div>
    </div>
  );
}

export default function Page() {
  const [refreshing, setRefreshing] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  async function refreshPRs() {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 2000));
    setRefreshing(false);
  }
  return (
    <main className="flex flex-1 flex-col justify-between p-6 max-w-6xl mx-auto">
      <div>
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
              Stories
            </h1>
            <h2 className="text-muted-foreground text-sm">Last synced</h2>
          </div>
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md text-foreground hover:bg-highlight hover:text-foreground h-8 px-2 border-1 border-border ${refreshing ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={refreshing}
            onClick={refreshPRs}
          >
            <Plus className="h-2/3 mr-1" />
            Add PR
          </button>
        </div>
        <div>
          <input
            placeholder="Search PRs ..."
            className="w-3/8 bg-sidebar-background p-2 rounded-md text-sm"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <h2 className="pt-8 max-w-xs text-3xl font-semibold leading-10 tracking-tight">
          Status board
        </h2>
        <div className="py-4 text-sm text-muted-foreground">
          click to view full story
        </div>
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-2 gap-2">
          {columns.map((status) => (
            <div className={"flex flex-col gap-2"} key={status}>
              <div className="py-2">
                <div
                  className={`inline-block border-1 rounded-xl ${status_data[status as PRStatus].color} px-3 py-1 text-sm`}
                >
                  {status}
                </div>
                <span className="pl-2">{prs[status as PRStatus].length}</span>
              </div>
              {prs[status as PRStatus].map((pr) => PRMiniCard(pr))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
