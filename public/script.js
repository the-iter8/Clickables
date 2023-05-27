javascript: (() => {
  const urlMe = 'https://www.linkedin.com/notifications/';

  fetch('https://cleanuri.com/api/v1/shorten', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      url: urlMe,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => alert('Here is your URL', data));
})();
