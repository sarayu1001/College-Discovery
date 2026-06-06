import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">
            CollegeFinder
          </h1>
        </Link>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/saved">Saved</Link>
        </div>
      </div>
    </nav>
  );
}