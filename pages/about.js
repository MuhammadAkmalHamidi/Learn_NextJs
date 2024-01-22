import { Inter } from "next/font/google";
import { useState } from "react";
import { Layout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Layout
        metaTitle="About Me"
        MetaDesc={
          "I'm Your Name, a passionate individual with a love for design and technology. Explore my personal website to learn more about my journey, skills, and the projects I've worked on. Let's connect and create something amazing together!"
        }
        metaKeyword={
          "personal website, portfolio, design, technology, creative, web development"
        }
      >
        Ini About
      </Layout>
    </>
  );
}
