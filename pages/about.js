import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Layout } from "@/layout";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setData(res.users)).catch((error) => console.log(error));
  }, []);

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
        <p className=" font-bold mb-3 text-2xl">this is my list friends :</p>
        {data?.map((item, index) => {
          return(
            <ul className=" flex gap-2">
              <p>{index + 1}.</p>
              <li> {item?.firstName} </li>
              <li> {item?.lastName} </li>
            </ul>
          )
        })}
      </Layout>
    </>
  );
}
