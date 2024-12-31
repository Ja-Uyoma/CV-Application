import { useCertificateStore } from "./hooks";
import { MonthsPreview } from "./months/months-preview";
import { YearsPreview } from "./years/years-preview";

export function CertificatesPreview() {
  const certificate = useCertificateStore((state) => state.certificate);
  const description = useCertificateStore((state) => state.description);

  return (
    <>
      {certificate}
      <MonthsPreview />
      <YearsPreview />
      {description}
    </>
  );
}
