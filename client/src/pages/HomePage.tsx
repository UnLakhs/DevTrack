import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* TOP NAVBAR */}
      <Navbar />

      {/* CONTENT AREA */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <Logo />
        </div>

        <h1 className="text-3xl font-semibold mb-4">
          Welcome to DevTrack
        </h1>

        <p className="text-zinc-400 mb-8 max-w-lg">
          Start building your developer workspace.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}