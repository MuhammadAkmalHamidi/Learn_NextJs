import Link from "next/link";

export default function notes(notes) {
  console.log(notes);
  return (
    <div>
      <div>
        <ul>
          Title :
          {notes?.data?.data?.map((item, index) => {
            return (
              <Link href={`/notes/${item.id}`} className=" flex gap-5 mb-4 ">
                <div>No. {index + 1}</div>
                <div>
                  <div>{item.description}</div>
                  <div>{item.title}</div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const data = await res.json();
  return { props: { data }, revalidate: 10 };
}
