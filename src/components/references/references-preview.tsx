import { useReferencesStore } from "./hooks";

export function ReferencesPreview() {
  const references = useReferencesStore((state) => state.references);

  return <>{references}</>;
}
