import { Inter } from "next/font/google";
import { useState } from "react";
import { Layout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        Ini Home
      </Layout>
    </>
  );
}
