/* eslint-disable react/prop-types */
const Testimonial = ({ testimonial }) => {
  return (
    <div className="p-6 mb-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg">{testimonial.content}</p>
      <p className="mt-2 text-gray-600">{testimonial.author}</p>
    </div>
  );
};

export default Testimonial;
