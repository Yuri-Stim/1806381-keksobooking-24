function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(randomNumber(2, 4));

function randomFractional(min, max, signs) {
  const rand = Math.random() * (max - min) + min;
  return (rand.toPrecision(signs));
}
alert(randomFractional(2, 4, 4));
