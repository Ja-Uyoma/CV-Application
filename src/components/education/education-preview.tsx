import { useStore } from "./hooks";

export function EducationPreview() {
  const education = useStore((state) => state.education);
  const school = useStore((state) => state.school);
  const startDate = useStore((state) => state.startDate);
  const endDate = useStore((state) => state.endDate);
  const description = useStore((state) => state.description);

  return (
    <>
      <p>{education}</p>
      <p>{school}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </>
  );
}
