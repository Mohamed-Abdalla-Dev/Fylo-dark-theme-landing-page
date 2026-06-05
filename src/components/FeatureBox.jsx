function FeatureBox({ data }) {
  return (
    <div className="text-center my-6">
      <img
        src={`/images/${data.icon}`}
        alt={data.title}
        className="mx-auto"
      />
      <h3 className="text-white-custom text-xl font-bold mt-6">{data.title}</h3>
      <p className="text-white-custom opacity-75 max-w-md mx-auto mt-2">
        {data.description}
      </p>
    </div>
  );
}

export default FeatureBox;
