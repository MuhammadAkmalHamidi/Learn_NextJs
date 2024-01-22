import { Inter } from "next/font/google";
import { useState } from "react";
import { Layout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout metaTitle="Home" metaKeyword={"personal website, portfolio, design, technology, creative, web development"} MetaDesc={" website that contains my personal information."}>
        Ini Home
      </Layout>
    </>
  );
}
