function fizbuxx(number) {
  let out = '';
  if (number % 15 == 0) {
    out += 'fizbuz';
  } else if (number % 5 == 0) {
    out += 'fiz';
  } else if (number % 3 == 0) {
    out += 'buz';
  } else {
    out += number;
  }
  return out;
}

const buz = num => num 
console.log(fizbuxx(30));
