import { useEducationStore } from "./hooks";

export function EducationPreview() {
  const education = useEducationStore((state) => state.education);
  const school = useEducationStore((state) => state.school);
  const startDate = useEducationStore((state) => state.startDate);
  const endDate = useEducationStore((state) => state.endDate);
  const description = useEducationStore((state) => state.description);

  const storeHasData = () => {
    return education || school || startDate || endDate || description;
  };

  return (
    <>
      {storeHasData() ? (
        <p>
          <span className="uppercase text-2xl bg-black text-white px-1">
            Education
          </span>
        </p>
      ) : (
        <></>
      )}

      <p>{education}</p>
      <p>{school}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </>
  );
}
