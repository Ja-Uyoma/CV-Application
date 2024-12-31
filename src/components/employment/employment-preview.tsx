import { useEmploymentStore } from "./hooks";

export function EmploymentPreview() {
  const position = useEmploymentStore((state) => state.position);
  const employer = useEmploymentStore((state) => state.employer);
  const startDate = useEmploymentStore((state) => state.startDate);
  const endDate = useEmploymentStore((state) => state.endDate);
  const description = useEmploymentStore((state) => state.description);

  return (
    <>
      {position}
      {employer}
      {startDate}
      {endDate}
      {description}
    </>
  );
}
