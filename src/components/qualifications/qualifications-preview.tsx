import { useStore } from "./hooks";

export function QualificationsPreview() {
  const qualifications = useStore((state) => state.qualifications);

  return <>{qualifications}</>;
}
