import { Layout } from "@/layout";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [id, setId] = useState(0);

  const handleClick = (newId) => {
    setId(newId);
  };

  return (
    <div>
      <Layout>
        <div className=" w-full flex justify-center">List Portfolio</div>
        <div>
          <div>
            <ul>
              <li>
                <Link href={{ pathname: `/portfolio/1` }}>
                  <p>portfolio 1</p>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: `/portfolio/2` }}>
                  <p>Portfolio 2</p>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: `/portfolio/3` }}>
                  <p>Portfolio 3</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
