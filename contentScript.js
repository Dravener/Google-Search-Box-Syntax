console.log('GSBS')
const searchBox = document.getElementsByName('q')
const sBox = document.getElementById('main')
const sh3 = '<div class="gsbs"><h2>  Key Words -or-  "exact phrase in quotation marks"  -or-  Operator {OR} -or-  minus(-) to exclude words  and more  </h2></div>'
sBox.insertAdjacentHTML("beforeEnd", sh3)
console.log(sBox)
searchBox[0].placeholder = ' Key Words -or-  "exact phrase in quotation marks"  -or-  Operator {OR} -or-  minus(-) to exclude words  and more '
