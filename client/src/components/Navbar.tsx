import Logo from "./Logo";
import { MdOutlineDashboard } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { GoGear } from "react-icons/go";

export function Navbar() {
  return (
    <div className="hidden min-h-screen md:flex w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar-background">
      <div className="flex h-14 items-center gap-2 px-4 border-b border-sidebar-border">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto py-3">
        <div className="px-3">
          <ul className="space-y-0.5">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] transition-colors hover:bg-sidebar-accent bg-sidebar-accent text-foreground font-medium"
              >
                <MdOutlineDashboard />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
              >
                <GoFileDirectory />
                Projects
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
              >
                <BsGraphUp />
                Statistics
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
              >
                <GoGear />
                Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6 px-3">
            <div className="px-2.5 mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Active Projects</span>
                <span className="text-[10px] font-mono text-muted-foreground">4 </span>
            </div>
        </div>
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2.5 rounded-md px-1.5 py-1">
            <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-[11px] font-semibold text-foreground">AM</div>
            <div className="flex flex-col leading-tight min-w-0">
                <span className="text-[12px] font-medium truncate">Alex Mercer</span>
                <span className="text-[11px] text-muted-foreground truncate">alex.mercer@example.com</span>
            </div>

        </div>

      </div>
    </div>
  );
}
