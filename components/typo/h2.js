export default function H2({ children }) {
  return (
    <div className="mt-28 mb-12 border-t-4 border-gray-800">
      {/* -mt-0.5 is there to fix a small pixel of difference for some viewports */}
      <h2 className="inline-block -mt-0.5 text-xl font-medium md:text-4xl py-3 px-4 text-gray-200 uppercase bg-gray-800 ">
        {children}
      </h2>
    </div>
  );
}
