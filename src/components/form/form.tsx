export function Form(props: { children: React.ReactNode }) {
  return (
    <form action="/" method="post" className="rounded-lg space-y-2">
      {props.children}
    </form>
  );
}
