import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import parse from "html-react-parser";
const AllPoems = () => {
  const [poems, setPoems] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/poems")
      .then((res) => res.json())
      .then((data) => setPoems(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
            {poems
              .filter((poem) => poem.author === user.email)
              .map((poem) => (
                <tr key={poem._id}>
                  <td>{poem.title}</td>
                  <td>{poem.description}</td>
                  <td>{parse(poem.poemContent)}</td>
                  <td>{poem.genre}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm btn-error"> Delete</button>
                    <button className="btn btn-sm btn-warning"> Edit</button>
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
