import { fetchDashboardPRs } from "@/lib/data/prs";
import StoriesClientPage from "@/app/ui/stories/StoriesClientPage";
import { Suspense } from "react";
import { StoriesClientPageSkeleton } from "@/app/ui/skeletons";

export default async function StoriesPage() {
  return (
    <div>
      {/* <StoriesClientPageSkeleton /> */}
      <Suspense fallback={<StoriesClientPageSkeleton />}>
        <StoriesClientPageWrapper />
      </Suspense>
    </div>
  );
}

async function StoriesClientPageWrapper() {
  const userId = "7f759600-988e-4a81-9878-439523293021";
  const dashboardPRs = await fetchDashboardPRs(userId);
  return <StoriesClientPage initialPrs={dashboardPRs} />;
}
