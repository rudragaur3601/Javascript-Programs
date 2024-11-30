// using callback

function manualDelay(myTime, getNextData) {
  setTimeout(() => {
    console.log(`Printed After ${myTime} Seconds `);
    if (getNextData) {
      getNextData();
    }
  }, myTime * 1000);
}
manualDelay(2, () => {
  manualDelay(3, () => {
    manualDelay(4);
  });
});
