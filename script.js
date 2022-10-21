/* Capture 10 items para compor a lista de um supermercado
  Após capturar os 10 items, imrpima-os, separando por virgula.
  */

let userName = prompt('What´s your name?')
alert(
  `${userName}, we will make up a supermarket list with 10 items, please insert them separately `
)

let items = []

for (let item = 0; item < 10; item++) {
  itemName = prompt('Type the item' + (item + 1))

  items[item] = itemName
}

alert(`${userName} that´s your list: ${items} `)
