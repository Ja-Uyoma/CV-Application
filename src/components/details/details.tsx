export function Details(props: { title: string; children: React.ReactNode }) {
  return (
    <details
      name="resume"
      className="rounded-none space-y-2 py-2 w-11/12 mx-auto"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl cursor-pointer">
          {props.title}
        </span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

      {props.children}
    </details>
  );
}
