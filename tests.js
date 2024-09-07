
async function getUsers() {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => {

      console.log("Hola Mundo");
      console.log("Hola " + user[0].name + " catch phrase: " + user[0].company.catchPhrase);
    })

  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const json = await response.json();
  console.log(json);
  console.log(json.length);

  const users = json.map((user, i) => {

    
    console.log(`key is ${i}, user name is ${user.name} and user catch phrase is ${user.company.catchPhrase}`);
  })

  console.log(users[0]);

}


getUsers();