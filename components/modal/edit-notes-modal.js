import  Axios  from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react"

export default function EditNotesModal({id, reload,setReload,setOpen,open}) {

  const handleEditNotes = async (data) => {
    try {
      const response = await Axios.patch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`, data)
      setReload(!reload)
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
  } 

  return(
    <div className={`w-full z-100 h-screen fixed justify-center items-center ${open? "flex" : "hidden"}`}>
      <div className="bg-black absolute w-full h-screen opacity-80"></div>
      <div className="w-1/3 h-2/3 p-5 bg-white opacity-100 relative rounded-md">
        <div className="flex justify-between px-3">
          <p>Edit Notes</p>
          <p className=" cursor-pointer" onClick={() => setOpen(false)}>X</p>
        </div>
        <div className=" mt-10">
        <Formik
                initialValues={{
                  title: "",
                  description: "",
                }}
                onSubmit={(values) => {
                  handleEditNotes(values);
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
  )
}