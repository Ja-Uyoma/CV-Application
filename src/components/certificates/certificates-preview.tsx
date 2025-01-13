import { useCertificateStore } from "./hooks";
import { MonthsPreview } from "./months/months-preview";
import { YearsPreview } from "./years/years-preview";

export function CertificatesPreview() {
  const certificate = useCertificateStore((state) => state.certificate);
  const description = useCertificateStore((state) => state.description);

  return (
    <>
      <p>
        <span className="uppercase text-2xl bg-black text-white px-1">
          Certificates
        </span>
      </p>

      {certificate}
      <MonthsPreview />
      <YearsPreview />
      {description}
    </>
  );
}
