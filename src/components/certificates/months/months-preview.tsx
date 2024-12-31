import { useMonthStore } from "./hooks";

export function MonthsPreview() {
  const month = useMonthStore((state) => state.month);

  return <>{month}</>;
}
