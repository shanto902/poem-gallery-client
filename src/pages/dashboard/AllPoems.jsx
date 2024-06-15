import useAuth from "../../hooks/useAuth";
import parse from "html-react-parser";
import usePoems from "../../hooks/usePoems";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import DashboardTitle from "../../components/DashboardTitle";
import { useState } from "react";
import { toast } from "react-toastify";

const AllPoems = () => {
  const { user } = useAuth();
  const { poems, loading, error, refetch } = usePoems();
  const [deleting, setDeleting] = useState(false);

  if (loading || deleting) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this poem?")) {
      setDeleting(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_url}/poem/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await response.json();
        if (result.deletedCount > 0) {
          toast.success("Poem deleted successfully!");
          refetch(); // Refresh the poems list after deletion
        } else {
          toast.error("Failed to delete the poem.");
        }
      } catch (error) {
        console.error("Error deleting poem:", error);
        toast.error("An error occurred while deleting the poem.");
      } finally {
        setDeleting(false);
      }
    }
  };

  return (
    <div>
      <DashboardTitle>My Poems</DashboardTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Poem</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {poems
              .filter((poem) => poem?.author?.email === user.email)
              .map((poem) => (
                <tr key={poem._id}>
                  <td>{poem.title}</td>
                  <td>
                    <p className="line-clamp-1">{poem.description}</p>
                  </td>
                  <td>
                    <p className="line-clamp-1">{parse(poem.poemContent)}</p>
                  </td>
                  <td>{poem.genre}</td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(poem._id)}
                    >
                      Delete
                    </button>
                    <Link
                      className="btn btn-sm btn-warning"
                      to={`/dashboard/all-poems/edit/${poem._id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPoems;
