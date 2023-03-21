const alphabet = `abcdefghijklmnopqrstuvwxyz`.split``

let choice = s => s[Math.floor(Math.random()*s.length)]

let isUppercase = c => c.toLocaleUpperCase() == c

const vowels =`aeiou`.split``
let isVowel = c => vowels.includes(c.toLowerCase())
const consonants = alphabet.filter(c => !isVowel(c))
let isConsonant = c => consonants.includes(c.toLowerCase())

let randomizeLetter = letter => {
  let random 
  if(isVowel(letter)){
    random = choice(vowels)
  } else if (isConsonant(letter)){
    random = choice(consonants)
  } else {
    return letter
  }
  
  if(isUppercase(letter)){ random = random.toLocaleUpperCase()}

  return random
}

let obscureTextNodes = () => {
  // Get all text nodes on the page
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)
  let node

  // Loop through each text node and obscure text
  while (node = walker.nextNode()) {
    node.textContent = obscureText(node.textContent)
  }
}

let obscurePlaceholders = () => {
  // obscure placeholders
  document.querySelectorAll('[placeholder]')
    .forEach(el => el.placeholder = obscureText(el.placeholder))
}

let obscureText = s => {
    // Split the node into an array of characters
    const characters = s.split('')

    let randomized = characters.map(c => {
      if(alphabet.includes(c)){
        return randomizeLetter(c)
      } else {
        return c
      }
    })
    .join("")

    return randomized
  }

let obscurePage = () => {
  obscurePlaceholders()
  obscureTextNodes()
}

// Call the function to replace all text nodes with random letters
obscurePage()
