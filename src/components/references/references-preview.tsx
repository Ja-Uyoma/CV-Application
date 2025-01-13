import { useReferencesStore } from "./hooks";

export function ReferencesPreview() {
  const references = useReferencesStore((state) => state.references);

  return (
    <>
      {references ? (
        <p>
          <span className="uppercase text-2xl bg-black text-white px-1">
            References
          </span>
        </p>
      ) : (
        <></>
      )}

      {references}
    </>
  );
}
