const searchInput = document.getElementById("form1");
const submitButton = document.getElementById('submit-button');

searchInput.addEventListener("input", e =>{
    const city = e.target.city
       
})

// $.ajax({
//     method:"get",
//     url:"https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london",
//     success:function(res){
//         res.forEach(element => {
//             console.log(element.name);
//             console.log(element.country);
//         });
//     },
//     error:function(er){
//         console.log(er);
//     }
// })   

axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${city}`)
  .then(function (response) {
    console.log(response.data[0].name);
  })

  .catch(function (error) {
    console.log(error);
  })
