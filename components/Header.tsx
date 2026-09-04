import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-green-700 bg-gradient-to-r from-green-700 to-green-500 px-4 py-3 shadow-md dark:from-green-900 dark:to-green-700">
      <div className="flex items-center gap-3">
        {/* logo — ganti public/logo.png dengan file kamu */}
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-white shadow">
          <Image
            src="/logo.svg"
            alt="Sipekstore logo"
            fill
            sizes="36px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="font-heading text-xl font-black uppercase leading-tight tracking-wide text-white">
            Sipekstore
          </h1>
          <p className="text-xs text-green-100">nitip barang, dibayar beneran</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
