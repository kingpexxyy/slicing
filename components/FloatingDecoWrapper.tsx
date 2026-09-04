"use client";

import dynamic from "next/dynamic";

const FloatingDeco = dynamic(() => import("./FloatingDeco"), { ssr: false });

export default function FloatingDecoWrapper() {
  return <FloatingDeco />;
}
