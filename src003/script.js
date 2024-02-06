// delete usage

let data = ['Python', 'PHP', 'JavaScript']


console.log(data)
console.log(delete data[0])
console.log(data)

let langs = {
  primary: 'japanese',
  secandary: 'english',
}

console.log(langs)
console.log(delete langs.secandary)
console.log(langs)

let member = {
  name: 'Yamada',
  sex: 'male',
  language: langs
}

console.log(member)
console.log(delete member.language)
console.log(member)

console.log(langs)

let title = 'Vue.js本格入門'
console.log(delete title)
console.log(title)



// typeof usage