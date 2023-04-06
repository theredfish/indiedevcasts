export default function H2({ children }) {
  return (
    <div className="mb-12 border-t-4 border-gray-800">
      <h2 className="inline-block text-6xl pb-2 px-4 text-gray-200 uppercase bg-gray-800 border-t border-gray-800">
        {children}
      </h2>
    </div>
  );
}
