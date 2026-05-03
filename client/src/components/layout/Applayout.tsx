import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </main>
  );
}