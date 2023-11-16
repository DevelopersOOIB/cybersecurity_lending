// document.querySelector('form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   var formData = new FormData(this);
//   fetch(this.action, {
//       method: 'POST',
//       body: formData
//   })
//   .then(response => response.text())
//   .then(data => {
//       if (data === 'success') {
//           alert('Заявка принята');
//       } else {
//           alert('Ошибка1: ' + data);
//       }
//   });
// });


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      document.querySelectorAll('form').forEach(form2 => {
        if (form2 !== this) {
          var formData2 = new FormData(form2);
          formData2.forEach((value, key) => {
            formData.append(key, value);
          });
        }
      });
      fetch(this.action, {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          if (data === 'success') {
              $(this).closest('.modal').modal('hide');
              $('#thankYouModal').modal('show');
          } else {
              alert('Ошибка: ' + data);
          }
      });
    });
 });