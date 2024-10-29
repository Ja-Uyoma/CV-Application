import { useStore } from "./hooks";

export function EmploymentPreview() {
  const position = useStore((state) => state.position);
  const employer = useStore((state) => state.employer);
  const startDate = useStore((state) => state.startDate);
  const endDate = useStore((state) => state.endDate);
  const description = useStore((state) => state.description);

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
