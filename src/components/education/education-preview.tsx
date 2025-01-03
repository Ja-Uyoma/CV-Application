import { useEducationStore } from "./hooks";

export function EducationPreview() {
  const education = useEducationStore((state) => state.education);
  const school = useEducationStore((state) => state.school);
  const startDate = useEducationStore((state) => state.startDate);
  const endDate = useEducationStore((state) => state.endDate);
  const description = useEducationStore((state) => state.description);

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
