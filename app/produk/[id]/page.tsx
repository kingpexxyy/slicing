import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { ProdukData } from "@/data/produk";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return ProdukData.map((item) => ({ id: String(item.id) }));
}

export default async function DetailProdukPage({ params }: Props) {
  const { id } = await params;
  const item = ProdukData.find((p) => p.id === Number(id));
  if (!item) notFound();

  return (
    <PageShell>
      <div className="mx-auto max-w-2xl animate-fade-in">
        {/* Back */}
        <Link
          href="/produk"
          className="mb-4 inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-green-600 shadow-sm transition-colors duration-150 hover:bg-green-50 dark:hover:bg-green-900"
          style={{ background: "var(--bg-card)" }}
        >
          ← balik ke produk
        </Link>

        {/* Image */}
        <div
          style={{ animationDelay: "60ms", background: "var(--bg-card)" }}
          className="relative h-72 w-full overflow-hidden rounded-3xl shadow-md animate-fade-in-up"
        >
          {item.foto ? (
            <Image
              src={item.foto}
              alt={item.judul}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
          ) : (
            // taruh foto di public/images/produkN.jpg
            // lalu isi field foto di data/produk.ts
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <span className="text-5xl opacity-20">📷</span>
              <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                taruh foto di{" "}
                <code className="rounded bg-gray-100 px-1 dark:bg-green-950">public/images/</code>
                {" "}lalu isi field{" "}
                <code className="rounded bg-gray-100 px-1 dark:bg-green-950">foto</code>
                {" "}di{" "}
                <code className="rounded bg-gray-100 px-1 dark:bg-green-950">data/produk.ts</code>
              </p>
            </div>
          )}
        </div>

        {/* Card */}
        <div
          style={{ animationDelay: "140ms", background: "var(--bg-card)" }}
          className="mt-4 rounded-3xl p-6 shadow-md animate-fade-in-up"
        >
          <h1
            className="font-heading text-4xl font-black uppercase leading-none tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            {item.judul}
          </h1>
          <p className="mb-4 mt-1 text-xs" style={{ color: "var(--fg-muted)" }}>
            {item.tgl}
          </p>

          <hr style={{ borderColor: "var(--border)" }} className="mb-4" />

          <p
            className="whitespace-pre-line text-sm leading-loose"
            style={{ color: "var(--fg-muted)" }}
          >
            {item.konten}
          </p>

          <div style={{ animationDelay: "220ms" }} className="mt-6 animate-fade-in-up">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3 text-lg font-black uppercase tracking-wide text-white shadow-md transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:bg-green-600 hover:shadow-lg active:scale-95"
            >
              📲 chat di WhatsApp
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
