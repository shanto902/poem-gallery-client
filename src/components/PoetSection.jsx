import usePoets from "../hooks/usePoets";
import FeaturedPoet from "./FeaturedPoets";
import Loading from "./Loading";
import PaddingContainer from "./PaddingContainer";

const PoetSection = () => {
  const { poets, loading, error } = usePoets();
  console.log(poets);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <PaddingContainer>
      <h2 className="my-5 text-3xl font-bold text-center">Featured Poets</h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {poets.map((poet, i) => (
          <FeaturedPoet
            key={i}
            name={poet.name}
            photo={poet.photo}
            description={`Total Poems ${poet.poems.length}`}
          />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default PoetSection;
