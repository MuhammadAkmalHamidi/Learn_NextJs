import EditNotesModal from "@/components/modal/edit-notes-modal";
import { useQueries } from "@/hooks/useQueries";
import Layout from "@/layout";
import fetcher from "@/utils/fetcher";
import Axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from 'swr'

export default function notes() {
  // const {data , isLoading, isError} = useQueries({prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/notes"});
  const {data, isLoading, error } = useSWR("https://paace-f178cafcae7b.nevacloud.io/api/notes", fetcher)
  console.log(data);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  // const getData = async () => {
  //   const response = await Axios.get(
  //     "https://paace-f178cafcae7b.nevacloud.io/api/notes"
  //   );
  //   setData(response.data.data);
  // };

  const deleteNotesById = async (id) => {
    try {
      const response = await Axios.delete(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`
      );
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getData();
  }, [reload]);
  return (
    <>
      <EditNotesModal
        open={open}
        setReload={setReload}
        reload={reload}
        setOpen={setOpen}
        id={id}
      />
      <Layout>
        <div>
          <div className="flex px-10 pt-10  justify-end">
            <Link
              href="/notes/add"
              className="p-2 bg-red-800 text-white rounded-md"
            >
              Add Notes
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {data?.data.map((item, index) => {
              return (
                <div className="w-1/4 p-5 border">
                  <Link
                    href={`notes/${item.id}`}
                    key={index}
                    className=" cursor-pointer"
                  >
                    <p className=" mb-5 text-2xl font-bold ">{item.title}</p>
                    <p>{item.description.substring(0, 80) + "...."}</p>
                  </Link>
                  <div className=" h-1/3 flex">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setId(item.id);
                      }}
                      className="w-1/2 flex font-bold justify-center items-center"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNotesById(item.id)}
                      className=" text-white rounded-md bg-red-500 w-1/2 flex font-bold justify-center items-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
//   const data = await res.json();
//   return { props: { data }, revalidate: 10 };
// }
