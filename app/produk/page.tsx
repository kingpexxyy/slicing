import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ProdukData } from "@/data/produk";

export default function ProdukPage() {
  return (
    <PageShell>
      <div className="mb-5 animate-fade-in-up">
        <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-green-800 dark:text-green-300">
          yang lagi dijual
        </h2>
        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
          {ProdukData.length} barang · geser ke kanan →
        </p>
      </div>

      {/* Horizontal scroll row */}
      <div className="scroll-row">
        {ProdukData.map((item, index) => (
          <div
            key={item.id}
            style={{
              animationDelay: `${Math.min(index, 5) * 70}ms`,
              width: "220px",
              background: "var(--bg-card)",
            }}
            className="group flex flex-col overflow-hidden rounded-2xl shadow-sm animate-fade-in-up
              hover:-translate-y-1 hover:shadow-xl
              transition-[transform,box-shadow] duration-300 ease-out"
          >
            {/* Image — taller */}
            <div className="relative h-52 w-full shrink-0 overflow-hidden bg-green-50 dark:bg-green-950">
              {item.foto ? (
                <Image
                  src={item.foto}
                  alt={item.judul}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-1">
                  <span className="text-4xl opacity-20">📷</span>
                  <span className="text-xs text-green-300">belum ada foto</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-3">
              <p
                className="font-heading text-base font-black uppercase leading-snug tracking-wide"
                style={{ color: "var(--fg)" }}
              >
                {item.judul}
              </p>
              <p className="mt-0.5 text-xs" style={{ color: "var(--fg-muted)" }}>
                {item.tgl}
              </p>
              <p
                className="mt-2 line-clamp-2 text-xs leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.cuplikan}
              </p>
              <div className="mt-auto pt-3">
                <Link
                  href={`/produk/${item.id}`}
                  className="font-heading block w-full rounded-xl bg-green-500 py-2 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-green-600 active:scale-95"
                >
                  lihat →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
