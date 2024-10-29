import { useQualificationsStore } from "./hooks";

export function QualificationsPreview() {
  const qualifications = useQualificationsStore(
    (state) => state.qualifications
  );

  return <>{qualifications}</>;
}
