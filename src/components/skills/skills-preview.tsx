import { useSkillsStore } from "./hooks";

export function SkillsPreview() {
  const skills = useSkillsStore((state) => state.skills);

  return <>{skills}</>;
}
