Promise.all([
  fetch('https://techi.envivent.com/names.json'),
  fetch('https://techi.envivent.com/description.json'),
  fetch('https://techi.envivent.com/images.json')
])
  .then(responses => Promise.all(responses.map(responses => responses.json())))
  .then(arrays =>
    arrays.reduce(
      (accumulator, current) => accumulator.concat(current.employees),
      []
    )
  )
  .then(array =>
    array.filter(function (item) {
      return this[item.id]
        ? !Object.assign(this[item.id], item)
        : (this[item.id] = item)
    }, {})
  )
  .then(array => getRandom(array, 3))
  .then(result => {
    $un.forEach(item => {
      item.setAttribute(
        'style',
        `background: url('https://techi.envivent.com/employees/${result[0]
          .full}')`
      )
      item.appendChild(render(result[0]))
    })

    $deux.forEach(item => {
      item.setAttribute(
        'style',
        `background: url('https://techi.envivent.com/employees/${result[1]
          .full}')`
      )
      item.appendChild(render(result[1]))
    })

    $trois.forEach(item => {
      item.setAttribute(
        'style',
        `background: url('https://techi.envivent.com/employees/${result[2]
          .full}')`
      )
      item.appendChild(render(result[2]))
    })
  })

const $un = document.querySelectorAll('.un')
const $deux = document.querySelectorAll('.deux')
const $trois = document.querySelectorAll('.trois')

const render = item => {
  const $employee = document.createElement('div')
  $employee.setAttribute('class', 'employee-data')
  const $name = document.createElement('h1')
  $name.textContent = `${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()}`
  const $title = document.createElement('h5')
  $title.textContent = item.title.toLowerCase()
  const $info = document.createElement('p')
  $info.setAttribute('class', 'hidden')
  $info.textContent = item.description

  $employee.appendChild($name)
  $employee.appendChild($title)
  $employee.appendChild($info)
  return $employee
}

// Does not select unique items.
function getRandom(array, number) {
  var result = new Array(number)
  var length = array.length
  var taken = new Array(length)
  while (number--) {
    var x = Math.floor(Math.random() * length)
    result[number] = array[x in taken ? taken[x] : x]
    taken[x] = --length
  }
  return result
}

document.querySelectorAll('.headshot').forEach(node => {
  node.addEventListener('mouseenter', event => {
    let queried = event.target.querySelector('.employee-data')
    queried.setAttribute('class', 'employee-data selected')
    queried.lastChild.className = ' '
  })
})

document.querySelectorAll('.headshot').forEach(node => {
  node.addEventListener('mouseleave', event => {
    let queried = event.target.querySelector('.employee-data')
    queried.setAttribute('class', 'employee-data')
    queried.lastChild.className = 'hidden'
  })
})
