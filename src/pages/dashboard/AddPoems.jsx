import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DashboardTitle from "../../components/DashboardTitle";
import { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useAuth from "../../hooks/useAuth";

const AddPoems = () => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const { register, handleSubmit, setValue, reset } = useForm();
  const editorRef = useRef(null);

  useEffect(() => {
    register("poemContent", { required: true, minLength: 11 });
  }, [register]);

  const onSubmit = async (data) => {
    // Ensure the editor content is included in the data
    data.poemContent = editorRef.current.getContent();

    const userData = { ...data, author: user.email };
    await fetch("http://localhost:5000/poem", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Poem added successfully");
        reset();
      });
  };

  return (
    <div>
      <DashboardTitle>Add a Poem</DashboardTitle>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex-1 mt-2">
              <input
                className="w-full p-4 bg-gray-100 border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex-1 mt-2">
              <input
                className="w-full p-4 bg-gray-100 border border-black rounded-lg"
                type="text"
                name="genre"
                placeholder="Genre"
                {...register("genre", { required: true })}
              />
            </div>
          </div>
          <div className="mt-2">
            <textarea
              className="w-full p-4 bg-gray-100 border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>

          <Editor
            apiKey={import.meta.env.VITE_tinyMCE}
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Write your Poem here</p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content) => {
              setValue("poemContent", content);
            }}
          />

          <div className="flex items-center justify-center mt-2">
            <input
              className="p-4 mt-4  btn btn-md w-fit"
              type="submit"
              value="Add product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoems;
