import { useStore } from "./hooks";

export function MonthsPreview() {
  const month = useStore((state) => state.month);

  return <>{month}</>;
}
