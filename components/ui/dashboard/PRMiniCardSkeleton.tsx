export default function PRMiniCardSkeleton() {
  return (
    <div
      className="text-sm border border-border rounded-lg p-3 hover:bg-hover hover:cursor-pointer"
    >
      <div className="font-medium text-foreground">None</div>
      <div className="text-muted-foreground pb-2">
        <div className="pt-2">None</div>
      </div>
      <hr className="border-border" />
      <div className="pt-2">None</div>
    </div>
  );
}