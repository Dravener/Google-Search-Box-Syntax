const url = chrome.runtime.getURL('hakunamatata.txt')
const searchBox = document.getElementsByName('q')
const sBox = document.getElementById('main')
const inpt = document.getElementsByClassName('tsf')


const btn = '<div class="gsbs"> <button id="hakuna" class="hakuna-btn"> Hakuna </button> </div>'
const sh3 = '<div class="gsbs"><h2>  Key Words -or-  "exact phrase in quotation marks"  -or-  Operator {OR} -or-  minus(-) to exclude words  and more  </h2></div>'

inpt[0].insertAdjacentHTML("afterEnd", btn)
sBox.insertAdjacentHTML("beforeEnd", sh3)

searchBox[0].placeholder = ' Key Words -or-  "exact phrase in quotation marks"  -or-  Operator {OR} -or-  minus(-) to exclude words  and more '


const hakunaBtn = document.getElementById('hakuna')
hakunaBtn.addEventListener('click', () => {
  fetch(url)
    .then(response => response.text())
    .then(text => {
      let sents = text.split('\n')
      sents.forEach(sent => {
        if (sent.charAt(0).match(/[A-Z]/i) && sent.charAt(0) == sent.charAt(0).toUpperCase()) {
          let textR = ''
          const words = sent.split(' ')
          words.forEach(word => {
            if (word.charAt(0) == word.charAt(0).toUpperCase()) {
              word = `"${word}"`
              textR += ` ${word}`
            } else {
              textR += ` ${word}`
            }
          })
          searchBox[0].value = textR
        }
      })
    })
})