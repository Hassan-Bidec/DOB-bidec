


import CustomDetails from "../../src/Pages/CustomDetails";

export default function CustomDetailsWrapper(props) {
  return (
    // <Suspense fallback={<div className="p-10 text-white">Loading...</div>}>
      <CustomDetails {...props} />

  );
}