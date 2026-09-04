import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1" style={{ background: "var(--bg)" }}>
        <Sidebar />
        <main className="flex flex-1 flex-col overflow-x-hidden p-6" style={{ background: "var(--bg)" }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
