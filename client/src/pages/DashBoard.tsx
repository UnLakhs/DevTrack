import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white px-6 py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-50 -left-50 h-125 w-125 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-50 -right-50 h-125 w-125 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
        {/* LEFT SIDE */}
        <div>
          <Logo />
          <h1 className="text-5xl font-bold leading-tight mb-6">DevTrack</h1>

          <p className="text-xl text-zinc-300 mb-4">Build. Track. Ship.</p>

          <p className="text-zinc-400 mb-8 max-w-md">
            A focused workspace for developers to manage features, bugs, and
            implementation notes — without the noise of enterprise tools.
          </p>

          <div className="flex gap-4">
            <Link
              to="/register"
              className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              Start Tracking
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - TERMINAL CARD */}
        <div className="z-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
          <div className="mb-4 text-sm text-zinc-500">
            project: portfolio-app
          </div>

          <div className="space-y-3 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">[FEAT]</span>
              <span>Build dashboard layout</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-red-400">[BUG]</span>
              <span>Fix login redirect issue</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-400">[REFACTOR]</span>
              <span>Clean auth controller</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-400">[CHORE]</span>
              <span>Update README</span>
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-800 pt-4 text-xs text-zinc-500 font-mono">
            &gt; tasks: 12 | completed: 7 | status: in-progress
          </div>
        </div>
      </div>
    </main>
  );
}
