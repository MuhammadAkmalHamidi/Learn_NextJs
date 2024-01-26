import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Layout } from "@/layout";

// Import Layout menggunakan dynamic import
const DynamicLayout = dynamic(() => import("@/layout"));

export default function Home() {
  return (
    <div>
      <DynamicLayout>
        <p>Ini Home</p>
      </DynamicLayout>
    </div>
  );
}
