import { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return { message: "Hello from the API!" };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  console.log(name)
  // return redirect("/")
  return { message: `Hello, ${name}!`, success: true };
};
