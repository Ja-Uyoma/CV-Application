import { useSkillsStore } from "./hooks";

export function SkillsPreview() {
  const skills = useSkillsStore((state) => state.skills);

  return (
    <>
      {skills ? (
        <p>
          <span className="uppercase text-2xl bg-black text-white px-1">
            Skills
          </span>
        </p>
      ) : (
        <></>
      )}

      {skills}
    </>
  );
}
