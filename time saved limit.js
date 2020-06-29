const timeSaved = (speedLimit, avgSpeed, distance) =>
  Number(((distance / speedLimit - distance / avgSpeed) * 60).toFixed(1));