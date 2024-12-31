import { useInterestsStore } from "./hooks";

export function InterestsPreview() {
  const interests = useInterestsStore((state) => state.interests);

  return <>{interests}</>;
}
