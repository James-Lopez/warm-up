async function names() {
  const response = await fetch('https://techi.envivent.com/names.json')
  return response.json()
}

async function images() {
  const response = await fetch('https://techi.envivent.com/images.json')
  return response.json()
}

async function descriptions() {
  const response = await fetch('https://techi.envivent.com/description.json')
  return response.json()
}

let $names = []
let $descriptions = []
let $images = []

names().then(data => ($names = data.employees))
descriptions().then(data => ($descriptions = data.employees))
images().then(data => ($images = data.employees))
