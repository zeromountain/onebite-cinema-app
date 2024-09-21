import Link from "next/link";

export default function Header() {
  return (
    <header className="h-20 flex items-center bg-transparent">
      <Link href="/">
        <p className="text-xl font-bold text-[rgb(229,9,20)]">
          🎥 ONEBITE CINEMA
        </p>
      </Link>
    </header>
  );
}
