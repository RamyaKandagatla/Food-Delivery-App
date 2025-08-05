import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
      <h2 className="text-xl text-gray-800 mb-1">Something went wrong.</h2>
      <h3 className="text-lg text-gray-600">
        {error?.status}: {error?.statusText || "Unknown Error"}
      </h3>
      {error?.data && (
        <p className="mt-2 text-sm text-gray-500">{error.data}</p>
      )}
    </div>
  );
};

export default Error;
