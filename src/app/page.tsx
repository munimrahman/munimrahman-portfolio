import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/light">Light Mood</Link>
      <Link href="/dark">Dark Mood</Link>
    </div>
  );
}
