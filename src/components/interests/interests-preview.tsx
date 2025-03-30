import { useInterestsStore } from "./hooks";

export function InterestsPreview() {
  const interests = useInterestsStore((state) => state.interests);

  return (
    <>
      {interests ? (
        <p>
          <span className="uppercase text-2xl bg-black text-white px-1">
            Interests
          </span>
        </p>
      ) : (
        <></>
      )}

      {interests}
    </>
  );
}
