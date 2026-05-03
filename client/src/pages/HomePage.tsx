import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex  px-6">
      <div className="w-full max-w-5xl">
        {/* HERO */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
            Project tracking, built for the way developers actually work.
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            DevTrack is a small, focused workspace for your side projects. Track
            features and bugs, keep implementation notes next to the code they
            describe, and watch progress without the ceremony of an enterprise
            tool.
          </p>

          <div className="flex gap-4">
            <Link
              to="/register"
              className="rounded-md bg-sidebar-primary px-5 py-2.5 text-sm font-medium text-sidebar-primary-foreground hover:opacity-90 transition"
            >
              Start your workspace
            </Link>

            <Link
              to="/login"
              className="rounded-md border border-sidebar-border px-5 py-2.5 text-sm hover:bg-sidebar-accent transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
