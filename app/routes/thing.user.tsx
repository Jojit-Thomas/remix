import { useFetcher, useRevalidator } from "@remix-run/react";
import { action } from "./api";

export default function User() {
  // Access the data from the parent loader route
  const { revalidate } = useRevalidator();

  // const data = useRouteLoaderData("routes/thing");
  const fetcher = useFetcher<typeof action>();

  // console.log("User data", data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <button className="leading text-2xl font-bold text-gray-800 dark:text-gray-100" onClick={() => revalidate()}>
            User
          </button>
        </header>
        <fetcher.Form method="post" action="/api">
          <input type="text" className="p-3 ring-2 rounded-lg" name="name" autoComplete={"off"} />
          {/* <button type="submit">Submit</button> */}
        </fetcher.Form>

        {/* Show submission status */}
        <p className="text-green-600">Submitted name: {fetcher.data?.message}</p>
      </div>
    </div>
  );
}
