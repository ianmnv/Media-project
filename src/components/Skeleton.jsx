function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => <div key={i}>Loading</div>);

  return boxes;
}

export default Skeleton;
