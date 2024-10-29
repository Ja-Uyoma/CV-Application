import { useStore } from "./hooks";
import { MonthsPreview } from "./months/months";
import { YearsPreview } from "./years";

export function CertificatesPreview() {
  const certificate = useStore((state) => state.certificate);
  const description = useStore((state) => state.description);

  return (
    <>
      {certificate}
      <MonthsPreview />
      <YearsPreview />
      {description}
    </>
  );
}
