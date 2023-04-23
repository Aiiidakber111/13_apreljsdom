const users = [{
      id:1,
      name:"Aysu",
      surname:"Aliyev",
      email:"Aysu@gmail.com"
    },{
      id:2,
      name:"Lale",
      surname:"Nesirli",
      email:"lale@gmail.com"
    },{
      id:3,
      name:"Gunel",
      surname:"Quliyeva",
      email:"lorem@gmail.com"
    },{
      id:4,
      name:"Perviz",
      surname:"Alisov",
      email:"p_Alisov@gmail.com"
    },{
      id:5,
      name:"Resad",
      surname:"Xelilov",
      email:"Xelil@gmail.com"
    }, ]
//1 ci usul
   const tablebody=document.querySelector('.tbody')
   let innerHtml=""
   for (let i = 0; i < users.length; i++) {
    
    innerHtml+= `<tr>
    <th scope="row">${users[i].id}</th>
    <td>${users[i].name}</td>
    <td>${users[i].surname}</td>
    <td>${users[i].email}</td>
  </tr>`
   }
   tablebody.innerHTML=innerHtml


   //2 ci usul
//    for (let i = 0;i < users.length;i++) {
//  const{id,name,surname,email} = users[i]
//   const newTr = document.createElement("tr")
//   const idTd = document.createElement("td")
//   const nameTd = document.createElement("td")
//   const surnameTd = document.createElement("td")
//   const emailTd = document.createElement("td")
//   idTd.innerHTML= id;
//   nameTd.innerHTML = name;
//   surnameTd.innerHTML = surname;
//   emailTd.innerHTML = email;
//   newTr.append(idTd,nameTd,surnameTd,emailTd)
//   tablebody.appendChild(newTr)
// }