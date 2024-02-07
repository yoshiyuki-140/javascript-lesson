// loop内のswitch statement


loop:
for (let i = 1; i < 10; i++) {
  // 割る数
  const divideNum = 3

  switch (i % divideNum) {
    case 0:
      console.log(`${i}は3で割り切れた`)
      break loop;
    default:
      console.log(`${i}は3で割り切れない`);
      break loop;
  }
}

