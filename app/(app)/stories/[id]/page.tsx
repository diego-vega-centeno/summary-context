import StoryBoard from "@/app/ui/stories-id/StoryBoard";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: Props) {
  const { id } = await params;
  return <StoryBoard id={id} />;
}
