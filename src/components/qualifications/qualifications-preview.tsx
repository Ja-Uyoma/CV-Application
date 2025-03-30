import { useQualificationsStore } from "./hooks";

export function QualificationsPreview() {
  const qualifications = useQualificationsStore(
    (state) => state.qualifications
  );

  return (
    <>
      {qualifications ? (
        <p>
          <span className="uppercase text-2xl bg-black text-white px-1">
            Qualifications
          </span>
        </p>
      ) : (
        <></>
      )}

      {qualifications}
    </>
  );
}
