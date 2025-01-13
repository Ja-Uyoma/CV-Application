import { useEmploymentStore } from "./hooks";

export function EmploymentPreview() {
  const position = useEmploymentStore((state) => state.position);
  const employer = useEmploymentStore((state) => state.employer);
  const startDate = useEmploymentStore((state) => state.startDate);
  const endDate = useEmploymentStore((state) => state.endDate);
  const description = useEmploymentStore((state) => state.description);

  return (
    <>
      <p>
        <span className="uppercase text-2xl bg-black text-white px-1">
          Employment
        </span>
      </p>

      {position}
      {employer}
      {startDate}
      {endDate}
      {description}
    </>
  );
}
