export function Summary(props: { title: string }) {
  return (
    <summary className="list-none my-4 flex items-center justify-between">
      <span className="inline-block font-bold text-xl cursor-pointer">
        {props.title}
      </span>
      <button className="inline-block">
        <span className="material-symbols-outlined size-full">add_circle</span>
      </button>
    </summary>
  );
}
