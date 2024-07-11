import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div>Home</div>
      <div className="flex items-center gap-5">
        <a href="/sign-in" className="px-3 py-2 text-white bg-gray-300 rounded-lg">login In</a>
        <a href="/sign-up"className="px-3 py-2 text-white bg-blue-300 rounded-lg">Sign Up</a>
      </div>
    </div>
  );
}
