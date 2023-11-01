//searchinput
//searchbtn

const dictionary = (word) => {

   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '7644d1b10dmsh2b3cca4743a2f79p1abafajsn3a621f87c9ac',
         'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
       }
   }

   fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word,options)
      .then(response => response.json())
      .then((response) => {
         console.log(response)
         wordheading.innerHTML =  "Meaning of : " + response.word;
         definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.");
      })
      .catch(err => console.log(err))

}

searchbtn.addEventListener("click",(e) => {
      e.preventDefault();
      dictionary(searchinput.value)
})