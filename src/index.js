const fullName = document.getElementById("fullname");
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');
const phone = document.getElementById('phone');
const cell = document.getElementById('cell');
const dob = document.getElementById('date_of_birth');
const thumbnail = document.getElementById('thumbnail');


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.querySelector('.btn').addEventListener('click', handleClick);

})

function handleClick () {
  fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => handleData(json) )
}

function handleData(json) {
  let data = json.results[0]
  fullName.innerHTML = `${data.name.title} ${data.name.first} ${data.name.last}`;
  email.innerHTML = data.email;
  street.innerHTML = data.location.street;
  city.innerHTML = data.location.city;
  state.innerHTML = data.location.state;
  postcode.innerHTML = data.location.postcode;
  phone.innerHTML = data.phone;
  cell.innerHTML = data.cell;
  dob.innerHTML = data.dob.date;
  

  console.log(data)
}
