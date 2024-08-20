interface ErrorProps {
  error: {
    message: string;
  };
}

export const Error = ({ error }: ErrorProps) => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-center">
      <p className="text-2xl font-bold text-red-600">Error</p>
      <p className="text-lg mt-2">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  </div>
);
