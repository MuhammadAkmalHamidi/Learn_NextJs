import Layout from "@/layout";

export default function notesById(params) {
  console.log(params);
  return (
    <Layout>
      <div>
        <div>Title : {params.data.data.title}</div>
        <div>description : {params.data.data.description}</div>
        <div>Created by : {params.data.data.created_at}</div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const data = await res.json();
  const paths = data.data.map((item) => ({
    params: {
      id: item.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const data = await res.json();
  return { props: { data }, revalidate: 10 };
}
