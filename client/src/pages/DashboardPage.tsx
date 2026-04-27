import Logo from "../components/Logo";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-50 -left-50 h-125 w-125 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-50 -right-50 h-125 w-125 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      {/* 🔝 TOP BAR */}
      <div className="flex items-center justify-between mb-10">
        <Logo />

        <button className="text-sm text-zinc-400 hover:text-white transition">
          Logout
        </button>
      </div>

      {/* 👋 WELCOME */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-zinc-400">
          Manage your projects and keep your workflow organized.
        </p>
      </div>

      {/* ⚡ QUICK ACTION */}
      <div className="mb-10">
        <button className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300 transition">
          + New Project
        </button>
      </div>

      {/* 📦 PROJECTS */}
      <div className="z-10">
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>

        <div className="z-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-400">
          No projects yet.
          <br />
          Start by creating your first project.
        </div>
      </div>
    </main>
  );
}
