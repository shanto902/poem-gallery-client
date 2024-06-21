import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DashboardTitle from "../../components/DashboardTitle";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAuth from "../../hooks/useAuth";

const AddPoems = () => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    register("poemContent", { required: true, minLength: 11 });
  }, [register]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
    setValue("poemContent", content);
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
  ];

  const onSubmit = async (data) => {
    const userData = {
      ...data,
      author: { name: user.displayName, email: user.email },
      poemContent: editorContent,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_url}/poem`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to add poem");
      }

      await response.json();
      toast.success("Poem added successfully");
      reset();
      setEditorContent(""); // Clear the editor content
    } catch (error) {
      console.error("Error adding poem:", error);
      toast.error("Failed to add poem");
    }
  };

  return (
    <div>
      <DashboardTitle>Add a Poem</DashboardTitle>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 md:flex-row">
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
              className="w-full p-4 bg-gray-100 border "
              type="text"
              name="description"
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>

          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
            modules={modules}
            formats={formats}
          />

          <div className="flex items-center justify-center mt-2">
            <input
              className="p-4 mt-4 text-white rounded-none btn btn-md btn-success w-fit"
              type="submit"
              value="Add Poem"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoems;
