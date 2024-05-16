const CutOffCorner = () => {
  // Calculate the points for the cut-off shape
  const points = `100 1, 100 100, 12 100, 0 87, 0 0`;

  return (
    <div className="">
      {/* Main div with specified width and height */}

      {/* Cut-off shape */}
      <svg className="" width="300px" height="380px">
        <polygon points={points} fill="white" />
      </svg>
    </div>
  );
};

export default CutOffCorner;
