(() => {
  kintone.events.on(
    ['app.record.index.show'],
    (event) => {
      const userInput = prompt('Enter your favorite URL');
      if (userInput) {
        location.href = userInput;
      }

      const records = event.records;
      console.log(records);
    }
  );
})();