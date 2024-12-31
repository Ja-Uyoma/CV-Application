import { useYearsStore } from "./hooks";

export function YearsPreview() {
  const year = useYearsStore((state) => state.year);

  return <>{year}</>;
}
