
export const filterOnPrice = (arr) => {
  const copyArr = arr.slice();
  return copyArr.sort((a, b) => {
    return a.price - b.price;
  });
};
export const filterOnSpeed = (arr) => {
  const copyArr = arr.slice();
  return copyArr.sort((a, b) => {
    return (
      a.segments.reduce((acc, current) => acc.duration + current.duration) -
      b.segments.reduce((acc, current) => acc.duration + current.duration)
    );
  });
}

export const filterOnLength = (arr) => {
  if(arr.length > 20) {
    return arr.slice(0,20)
  }
  return arr;
}

export const filterOnStops = (arr, num) => {
  const noStops = arr.filter((el) => {
    const { segments } = el;
    const stops = segments.reduce(
      (acc, current) => acc.stops.length + current.stops.length
    );
    if (stops === num) return el;
  });
  return noStops;
};

