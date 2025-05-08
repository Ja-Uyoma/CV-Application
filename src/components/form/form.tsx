export function Form(props: { children: React.ReactNode }) {
  return (
    <form
      action="/"
      method="post"
      className="rounded-lg space-y-2 border-1 p-4 border-gray-400"
    >
      {props.children}
    </form>
  );
}
