import { useState, useEffect } from "react";
import { FaReadme } from "react-icons/fa";
import usePoems from "../hooks/usePoems";
import PaddingContainer from "./PaddingContainer";
import parse from "html-react-parser";
import { TfiWrite } from "react-icons/tfi";
import Loading from "./Loading";
import moment from "moment";

const PoemsShowcase = () => {
  const { poems, loading, error } = usePoems();
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    if (poems.length > 0) {
      const fetchComments = async () => {
        try {
          const poemIds = poems.map((poem) => poem._id);
          const promises = poemIds.map((id) =>
            fetch(`${import.meta.env.VITE_url}/poem/${id}/comments`)
          );
          const responses = await Promise.all(promises);
          const commentData = await Promise.all(
            responses.map(async (res) => {
              if (!res.ok) {
                throw new Error(`Error fetching comments for poem ${res.url}`);
              }
              const text = await res.text();
              return text ? JSON.parse(text) : [];
            })
          );
          const commentMap = {};
          commentData.forEach((comments, index) => {
            commentMap[poemIds[index]] = comments;
          });
          setComments(commentMap);
        } catch (err) {
          console.error("Failed to fetch comments", err);
        }
      };
      fetchComments();
    }
  }, [poems]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const handleCommentChange = (e, poemId) => {
    setNewComment({
      ...newComment,
      [poemId]: e.target.value,
    });
  };

  const handleCommentSubmit = async (poemId) => {
    if (newComment[poemId]) {
      const response = await fetch(
        `${import.meta.env.VITE_url}/poem/${poemId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment: newComment[poemId] }),
        }
      );

      if (response.ok) {
        await response.json();
        setComments({
          ...comments,
          [poemId]: [
            ...(comments[poemId] || []),
            { comment: newComment[poemId], createdAt: new Date() },
          ],
        });
        setNewComment({
          ...newComment,
          [poemId]: "",
        });
      } else {
        console.error("Failed to submit comment.");
      }
    }
  };

  return (
    <section className="py-10 bg-base-200">
      <PaddingContainer>
        <h2 className="my-5 text-3xl font-bold text-center">Latest Poems</h2>
        <div className="grid grid-cols-1 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2">
          {poems.slice(0, 6).map((poem, i) => (
            <div
              key={i}
              className="rounded-none shadow-xl card w-96 bg-base-100"
            >
              <div className="card-body">
                <h2 className="italic card-title">{poem.title}</h2>
                <p className="line-clamp-3">{poem.description}</p>
                <p className="flex items-center gap-2">
                  <TfiWrite /> {poem.author.name}
                </p>
                <div className="justify-end card-actions">
                  <button
                    onClick={() =>
                      document.getElementById(`modal-${poem._id}`).showModal()
                    }
                    className="btn btn-circle"
                  >
                    <FaReadme />
                  </button>
                </div>
              </div>
              <dialog id={`modal-${poem._id}`} className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold text-center">
                    {poem.title}
                  </h3>
                  <p className="py-4">{parse(poem.poemContent)}</p>
                  <h4 className="font-semibold text-md">Comments</h4>
                  <div className="comments-section">
                    {comments[poem._id] &&
                      comments[poem._id].map((comment, index) => (
                        <div key={index} className="py-2 border-t">
                          <p>{comment.comment}</p>
                          <p className="text-sm text-gray-500">
                            {moment(comment.createdAt).fromNow()}
                          </p>
                        </div>
                      ))}
                  </div>
                  <textarea
                    className="w-full p-2 mt-2 border rounded"
                    rows="3"
                    placeholder="Add a comment..."
                    value={newComment[poem._id] || ""}
                    onChange={(e) => handleCommentChange(e, poem._id)}
                  />
                  <button
                    className="mt-2 btn btn-primary"
                    onClick={() => handleCommentSubmit(poem._id)}
                  >
                    Submit
                  </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>Close</button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
      </PaddingContainer>
    </section>
  );
};

export default PoemsShowcase;
