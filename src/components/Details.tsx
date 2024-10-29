export function Details(props: { name: string; children: React.ReactNode }) {
  return (
    <details
      name={props.name}
      className="rounded-none space-y-2 cursor-pointer py-3 w-11/12 mx-auto"
    >
      {props.children}
    </details>
  );
}
