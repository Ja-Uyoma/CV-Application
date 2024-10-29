import { useStore } from "./hooks";

export function InterestsPreview() {
  const interests = useStore((state) => state.interests);

  return <>{interests}</>;
}
