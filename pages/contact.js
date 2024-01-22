import { Inter } from "next/font/google";
import { useState } from "react";
import { Layout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Layout
        metaTitle="Contact"
        MetaDesc={
          "Connect with Akmal Hamidi - reach out for collaboration, inquiries, or just to say hello. Find my contact details and let's start a conversation."
        }
        metaKeyword={
          "contact, contact information, get in touch, collaborations, inquiries, email, phone number, connect"
        }
      >
        Ini Contact
      </Layout>
    </>
  );
}
