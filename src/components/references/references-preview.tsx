import { useStore } from "./hooks";

export function ReferencesPreview() {
  const references = useStore((state) => state.references);

  return <>{references}</>;
}
