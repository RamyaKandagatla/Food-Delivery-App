const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="w-72 h-56 bg-gray-300 animate-pulse rounded-xl shadow-lg"
        >
          <div className="w-full h-32 bg-gray-400 rounded-t-xl" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
