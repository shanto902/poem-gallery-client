import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import DashboardTitle from "../../components/DashboardTitle";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAuth from "../../hooks/useAuth";

const EditPoems = () => {
  const poem = useLoaderData();
  const { register, handleSubmit, setValue } = useForm();
  const { user } = useAuth();
  const [editorContent, setEditorContent] = useState(poem.poemContent);

  useEffect(() => {
    register("poemContent", { required: true, minLength: 11 });
    setValue("title", poem.title);
    setValue("genre", poem.genre);
    setValue("description", poem.description);
    setValue("poemContent", poem.poemContent);
  }, [register, setValue, poem]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
    setValue("poemContent", content); // Update form value
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
  ];

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");

    const userData = {
      ...data,
      author: { name: user.displayName, email: user.email },
    };

    await fetch(`${import.meta.env.VITE_url}/poem/${poem._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(() => toast.success("Poem updated successfully"));
  };

  return (
    <div>
      <DashboardTitle>Edit Poem</DashboardTitle>

      <div className="my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center gap-5 mb-5 md:flex-row">
            <div className="flex-1 mt-2">
              <input
                className="w-full p-4 bg-gray-100 border "
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex-1 mt-2">
              <input
                className="w-full p-4 bg-gray-100 border "
                type="text"
                name="genre"
                placeholder="Genre"
                {...register("genre", { required: true })}
              />
            </div>
          </div>
          <div className="mt-2">
            <textarea
              rows={5}
              className="w-full p-4 bg-gray-100 border "
              type="text"
              name="description"
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>

          <ReactQuill
            className="mt-5"
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
            formats={formats}
            modules={modules}
          />

          <div className="flex items-center justify-center mt-2">
            <input
              className="p-4 mt-4 text-white rounded-none btn btn-md btn-success w-fit"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPoems;
