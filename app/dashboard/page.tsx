import { getPRsByStatus, dummyPRs } from "@/lib/data/dummy-data";
import {
  GitPullRequest,
  GitMerge,
  SquareDot,
  TriangleAlert,
} from "lucide-react";

const total_prs_length = dummyPRs.length;

const status_config = {
  total: { title: "total", icon: GitPullRequest, color: "text-grey-700" },
  open: { title: "open", icon: GitPullRequest, color: "text-green-700" },
  merged: { title: "merged", icon: GitMerge, color: "text-purple-700" },
  closed: { title: "closed", icon: SquareDot, color: "text-grey-700" },
  stale: { title: "stale", icon: TriangleAlert, color: "text-yellow-700" },
};

function StatsCard({
  value,
  config,
}: {
  value: number;
  config: Record<string, any>;
}) {
  return (
    <div
      className={`p-3 border-1 border-border rounded-lg flex items-center gap-2`}
    >
      <div className="w-2/3">
        <div className="text-lg text-muted-foreground">{config.title}</div>
        <div className="text-2xl">{value}</div>
      </div>
      <div
        className={`w-10 h-10 flex items-center justify-center text-2xl ${config.color} bg-muted-background rounded-xl`}
      >
        {<config.icon />}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-1 h-full w-full flex-col justify-between p-6 max-w-6xl mx-auto">
      <div className="">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
          Dashboard
        </h1>
        <h2 className="text-muted-foreground p-4 pl-0">Last synced</h2>
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] grid-cols-2 gap-2">
          {(
            Object.keys(status_config) as Array<keyof typeof status_config>
          ).map((type) => (
            <div key={type}>
              <StatsCard
                value={
                  type === "total"
                    ? total_prs_length
                    : getPRsByStatus(type).length
                }
                config={status_config[type]}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
