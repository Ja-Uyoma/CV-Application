import { useForm } from "react-hook-form";

interface Inputs {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function Employment() {
  const { register } = useForm<Inputs>();

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-2"
    >
      <summary className="list-none my-4">
        <span className="font-bold text-xl">Employment</span>
      </summary>

      <form action="/" method="post" className="rounded-lg space-y-2">
        <label className="block w-full">
          <span className="font-medium">Position</span>
          <input
            type="text"
            {...register("position", { required: true })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <label className="block w-full">
          <span className="font-medium">Employer</span>
          <input
            type="text"
            {...register("employer", { required: true })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Start Date</span>
            <input
              type="date"
              {...register("startDate", { required: true })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">End Date</span>
            <input
              type="date"
              {...register("endDate", { required: true })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("description", { required: true })}
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          ></textarea>
        </label>

        {/*  */}
      </form>
    </details>
  );
}
