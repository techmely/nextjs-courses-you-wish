import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
