import Link from "next/link";
import Launches from "./launches";
export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome to SpaceX Launch Site</h1>
        <Link href="/launches">Enter Here</Link>
      </div>
    </main>
  );
}
