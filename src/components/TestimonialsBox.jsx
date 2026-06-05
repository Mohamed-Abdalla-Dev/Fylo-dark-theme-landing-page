function TestimonialsBox({ data }) {
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 hover:-translate-y-2 transition duration-300 shadow-lg">
        <p className="text-white-custom opacity-80">{data.description}</p>
        <div className="flex items-center gap-3 mt-6">
          <img src={data.image} alt={data.name} className="w-10 rounded-full" />
          <div>
            <h3 className="text-white-custom font-bold">{data.name}</h3>
            <p className="text-cyan-300">{data.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsBox;
