// Dado un número indicar que tipo de angulo es
// Given a number, indicate what type of angle it is.

/*
Example: 
  console.log(angle(47)) return 'acute angle'
  console.log(angle(90)) return 'right angle'
  console.log(angle(145)) return 'obtuse angle'
  console.log(angle(180)) return 'flat angle'
*/

const angle = (grade) => {
  if (grade <= 47) {
    return 'acute angle';
  } else if (grade <= 90) {
    return 'right angle';
  } else if (grade <= 145) {
    return 'obtuse angle';
  } else if (grade <= 180) {
    return 'flat angle';
  } else {
    return 'invalid angle';
  }
}

const result = angle(2000); 
console.log(result); // 'acute angle'
