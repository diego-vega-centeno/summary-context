const columns = ["open", "stale", "merged", "closed"];

export default async function DashboardStatusSkeleton() {
  return (
    <>
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
                className={`inline-block border rounded-xl px-3 py-1 text-sm`}
              >
                {status}
              </div>
              <span className="pl-2">length</span>
            </div>
            <div
              className="text-sm border border-border rounded-lg p-3 hover:bg-hover hover:cursor-pointer"
            >
              <div className="font-medium text-foreground">title</div>
              <div className="text-muted-foreground pb-2">
                <div className="pt-2">info</div>
              </div>
              <hr className="border-border" />
              <div className="pt-2">
                status
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
