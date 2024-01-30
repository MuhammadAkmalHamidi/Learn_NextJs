import Layout from "@/layout";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
export default function addNotes() {
  const router = useRouter();
  const addNewNotes = async (data) => {
    try {
      const response = await Axios.post(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes",
        data
      );
      router.push("/notes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="h-screen">
        <div className=" p-5 mb-10">
          <Link
            href={"/notes"}
            className=" p-1 rounded-md text-white bg-red-800"
          >
            Back
          </Link>
        </div>
        <div className=" px-10">
          <div className="border-2 p-3 rounded-md w-2/3 shadow-md">
            <div>Add Notes</div>
            <div>
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                }}
                onSubmit={(values) => {
                  addNewNotes(values);
                  // console.log(values);
                }}
              >
                <Form>
                  <div>
                    <div>Title</div>
                    <Field
                      type="text"
                      name="title"
                      className="border-2 rounded-md w-2/3 h-12"
                      as="input"
                    />
                  </div>
                  <div>
                    <div>Description</div>
                    <Field
                      name="description"
                      className="border-2 rounded-md w-2/3 h-36"
                      as="textarea"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-gray-300 p-1 mt-2 rounded-md  "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
