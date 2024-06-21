const FeaturedPoet = ({ name, description, photo }) => {
  return (
    <div className="flex gap-4 p-4 bg-white shadow-md ">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={photo} />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold line-clamp-1">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedPoet;
