import Image from "next/image";
import TodoForm from "./components/TodoForm";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    cache: "no-store",
  }).then((res) => res.json());
  console.log(data);


  return (
   <main className="min-h-screen p-8 bg-gray-50">
    <div className="mb-8">
      <TodoForm />
    </div>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Server Response:</h3>
      <pre className="text-sm overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
   </main>
  );
}
