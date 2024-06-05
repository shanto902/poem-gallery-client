import usePoems from "../hooks/usePoems";
import PaddingContainer from "../components/PaddingContainer";
import { FaReadme } from "react-icons/fa";
import parse from "html-react-parser";
import { TfiWrite } from "react-icons/tfi";
import Loading from "../components/Loading";

const AllPoemsHome = () => {
  const { poems, loading, error } = usePoems();

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="overflow-x-auto min-h-[70vh]">
        <PaddingContainer>
          <h2 className="my-5 text-3xl font-bold text-center">Latest Poems</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {poems.length > 0 &&
              poems.reverse().map((poem) => (
                <div
                  key={poem._id}
                  className="w-full shadow-xl card bg-base-100"
                >
                  <div className="card-body">
                    <h2 className="italic card-title">{poem.title}</h2>
                    <p className=" line-clamp-3">{poem.description}</p>
                    <p className="flex items-center gap-2">
                      <TfiWrite /> {poem.author.name}
                    </p>
                    <div className="justify-end card-actions">
                      <button
                        onClick={() =>
                          document
                            .getElementById(`modal-${poem._id}`)
                            .showModal()
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
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              ))}
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default AllPoemsHome;
