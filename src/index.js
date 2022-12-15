import './css/styles.css';

const BASE_URL = 'https://6399986129930e2bb3d85d7f.mockapi.io/';
// //------------------------Method GET-------------------
// function getUsers () {
//  return fetch("BASE_URL")
//  .then(res => res.json());
// } //вернет весь список

// function getUsersById(bookId) {
//     return fetch(`BASE_URL/${bookId}`)
//     .then(res => res.json());
//    }
// getUsers();
// getUsersById(3);

// ----------------------------Method POST(добавить в DB)--------------------------------

// function addUser(newUser) {
//   const options = { // указываем метод, заголовки,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newUser),// в строку то что на DB
//   };
//   return fetch(`${BASE_URL}/Users`, options).then(res => res.json());
// }

// addUser({   //добавляемий об'ект. нельзя отправлять ID, его создает BackEnd
//     createdAt: '2022-12-13T17:45:39.810Z',
//     name: 'TGGGFRtoinette Grfgfgdjh',
//     avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1018.jpg'
// });
// .then(user => {
//     console.log('Respons DB');
//     console.log(user);
// });

//------------------------------Method PATCH замена части данних-----------------------------------------

// function updateUserById(update, userId) {
//     const options = { // указываем метод, заголовки,
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(update),   // переводит в строку то что отсилается на DB
//     };
//     return fetch(`${BASE_URL}/Users/${userId}`, options).then(res => res.json());
//   }
  
//   updateUserById({ name: "Tregub Roman" }, 2);

  //----------------------------------method DELETE---------------------------

// function removeUser(userId) {
//     const url = `${BASE_URL}/Users/${userId}`;
//     const options = {
//         method: 'DELETE',
//     };
//     return fetch(url, options).then(res => res.json()); 
// }

// removeUser(1);