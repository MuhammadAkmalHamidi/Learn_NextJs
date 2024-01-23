// pages/detailPortfolio/[id].js
import { Layout } from "@/layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPortfolio() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Layout>
        <div className=" px-5 py-2">
          <Link href={"/portfolio"}>
            <div className=" p-1 bg-zinc-700 w-fit text-yellow-500 rounded-md">
              Back
            </div>
          </Link>
          <div>Detail Portfolio {id}</div>
        </div>
      </Layout>
    </div>
  );
}
