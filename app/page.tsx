import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import FloatingDecoWrapper from "@/components/FloatingDecoWrapper";

export default function HomePage() {
  return (
    <PageShell>
      <div className="relative flex h-full flex-1 flex-col items-center justify-center gap-6 overflow-hidden py-16 text-center">

        {/* Mouse-follow floating decorations */}
        <FloatingDecoWrapper />

        {/* Logo — ganti public/logo.svg atau public/logo.png dengan file kamu */}
        <div style={{ animationDelay: "0ms" }} className="relative z-10 animate-fade-in-up">
          <div className="relative h-24 w-24 overflow-hidden rounded-3xl shadow-xl ring-4 ring-white/30">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <div style={{ animationDelay: "100ms" }} className="relative z-10 animate-fade-in-up">
          <h2 className="font-heading text-5xl font-black uppercase leading-none tracking-wide text-green-800 dark:text-green-300">
            Hai, selamat datang!
          </h2>
          <p className="mt-3 max-w-xs text-sm font-medium text-gray-500 dark:text-gray-400">
            ini tempat aku jual barang-barang yang aku punya.
            harga udah paling murah yang bisa aku kasih 😅
          </p>
        </div>

        {/* CTA */}
        <div style={{ animationDelay: "200ms" }} className="relative z-10 animate-fade-in-up">
          <Link
            href="/produk"
            className="font-heading inline-block rounded-2xl bg-green-500 px-8 py-3 text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.05] hover:bg-green-600 hover:shadow-xl active:scale-95"
          >
            CEK BARANGNYA →
          </Link>
        </div>

      </div>
    </PageShell>
  );
}
