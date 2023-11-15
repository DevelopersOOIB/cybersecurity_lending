var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
 event.preventDefault();

 let name = document.getElementById('name').value;
 let phone = document.getElementById('phone').value;
 let email = document.getElementById('email').value;
 let promocod = document.getElementById('promocod').value;

 const formData = {
    "name": name,
    "phone": phone,
    "email": email,
    "promocod": promocod
 };

 fetch('http://10.60.18.13:3000/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(formData)
 })
    .then(data => data.json())
    .then(response => console.log(response))
    .catch(error => console.log(error));
});

// http://10.60.18.13:3000/

// https://webhook.site/6eecd3b7-3474-466d-b00a-6fcd7c4660c5