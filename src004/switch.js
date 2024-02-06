// thinking name of python

let rank = 'B';

if (rank === 'A') {
  console.log('A');
} else if (rank === 'B') {
  console.log('B');
} else if (rank === 'C') {
  console.log('C');
} else {
  console.log('ランク外です');
}

// switch

switch (rank) {
  case 'A':
    console.log('A');
    break;
  case 'B':
    console.log('B');
    break;
  case 'C':
    console.log('C');
    break;
  default:
    console.log('ランク外');
    break;
}