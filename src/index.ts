(() => {
  kintone.events.on(
    ['app.record.index.show'],
    (event) => {
      console.log(event);
      const url = new URL(location.href);
      const message = url.searchParams.get('message');
      if (message !== null) {
        const resultElm = document.querySelector('#result');
        if (resultElm) resultElm.innerHTML = message;
      }
    }
  );
})();