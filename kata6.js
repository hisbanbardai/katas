const checkAir = function (samples = [], threshold) {
  let dirtySample = 0;

  samples.forEach(function(sample){
    if (sample === 'dirty'){
      dirtySample += 1;
    }
  })
  if ((dirtySample / samples.length) < threshold){
    return 'Clean';
  } else {
    return 'Polluted';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))