const carPassing = function (cars, speed) {
  const object = {
    time: Date.now(),
    speed: speed
  };
  cars.push(object);
  return cars;
}