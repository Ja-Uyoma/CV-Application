import { useStore } from "./hooks";

export function SkillsPreview() {
  const skills = useStore((state) => state.skills);

  return <>{skills}</>;
}
