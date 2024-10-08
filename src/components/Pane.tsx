import { useForm } from "react-hook-form";

interface Inputs {
  description: string;
}

function Pane(props: { name: string }) {
  const { register } = useForm<Inputs>();

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-xl space-y-2 cursor-pointer"
    >
      <summary className="list-none my-4">
        <span className="font-bold text-xl">{props.name}</span>
      </summary>

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("description", { required: true })}
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          ></textarea>
        </label>
      </form>
    </details>
  );
}

export { Pane };
