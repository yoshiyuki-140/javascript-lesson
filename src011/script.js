// can't break the block from under function
// bad practice

/*
label: {
  console.log('block start');
  (function () {
    break label;
  })();
  console.log();
}

*/