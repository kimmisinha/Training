// let fetchBtn = document.getElementById('fetch-btn');
// fetchBtn.addEventListener('click', buttonClickHandler)

// function buttonClickHandler() {
//      console.log('You have clicked the fetchBtn');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

//     // USE THIS FOR POST REQUEST
//     xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
//     xhr.getResponseHeader('Content-type', 'application/json');

//     // What to do on progress (optional)
//     xhr.onprogress = function(){
//         console.log('On progress');
//     }

//     // xhr.onreadystatechange = function () {
//     //     console.log('ready state is ', xhr.readyState);

//     // }

//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){

//             console.log(this.responseText)
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     params = `{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send(params);

//     console.log("We are done!");

// }

let popBtn = document.getElementById("pop-btn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  const xhr = new XMLHttpRequest();
  let res= xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  console.log(res)
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let list = document.getElementById("list");
      let str = " ";

      for (key in obj) {
        str += `<li>${obj[key].employee_name + obj[key].getElementById}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send();
  console.log("we can doing fetching employyes !");
}
