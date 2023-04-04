const playBtn = document.getElementById('play_btn');
const inputValue = document.querySelector('.input')
const keyboard = document.querySelector('#key')
const oqilishi = document.querySelector('#tracsiption')
const searchBn = document.getElementById('search_btn')
const naun  = document.getElementById('noun')
const noun  = document.querySelector('.noun')
const sysnonim  = document.getElementById('sysnonim')
const notFoundText = document.getElementById("notFoundText");
const elP1  = document.getElementById('p1')
const elP2 = document.getElementById('p2')
const elP3 = document.getElementById('p3')


// const  = document.getElementById('')
// const  = document.getElementById('')



// // PLay Audio

playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    async function getData() {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${keyboard.textContent}`
        );
        const data = await res.json();
        data[0].phonetics.forEach((element) => {
          if (element !== "") {
            const playAudio = new Audio(element.audio);
            playAudio.play();
          } else {
            console.log("No play audio");
          }
        });
        notFoundText.textContent = "";
      } catch (err) {
        notFoundText.textContent = "Error";
      }
    }
    getData();
  });

// Play Audio end

// El volue
searchBn.addEventListener('click', (e)=> {
    e.preventDefault()
    async function getDate(){
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue.value}`);
            console.log(res);
            const data = await res.json()
            console.log(data);
            keyboard.textContent = (data[0].word)
            oqilishi.textContent = (data[0].phonetic)
            sysnonim.textContent = (data[0].meanings[0].synonyms[0])
            elP1.textContent = (data[0].meanings[0].definitions[0].definition)
            elP2.textContent = (data[0].meanings[0].definitions[1].definition)
            elP3.textContent = (data[0].meanings[0].definitions[2].definition)
            if (sysnonim.textContent.length == 0){
              sysnonim.textContent = "no synonym"
          }
            
        } catch (err) {
        }
        inputValue.value = ""
    }
    getDate();
})








