import { FaReadme } from "react-icons/fa";
import usePoems from "../hooks/usePoems";
import PaddingContainer from "./PaddingContainer";
import parse from "html-react-parser";
import { TfiWrite } from "react-icons/tfi";
const PoemsShowcase = () => {
  const { poems, loading, error } = usePoems();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(poems);
  return (
    <section className="py-10 bg-base-200">
      <PaddingContainer>
        <h2 className="my-5 text-3xl font-bold text-center">Latest Poems</h2>
        <div className="grid grid-cols-3 gap-5">
          {poems.length > 0 &&
            poems
              .reverse()
              .slice(0, 6)
              .map((poem, i) => (
                <div key={i} className="shadow-xl card w-96 bg-base-100">
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
    </section>
  );
};

export default PoemsShowcase;
