document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  fetch(this.action, {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      if (data === 'success') {
      } else {
          alert('Ошибка: ' + data);
      }
  });
});
