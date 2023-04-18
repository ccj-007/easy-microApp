import Route from "./router";

const route = new Route()

route.init()

function getHashId() {
  return Math.random()
}
function handleRandomHashRoute() {
  const btn = document.createElement('button')
  let randomId = getHashId()
  btn.innerHTML = '随机更改路由' + randomId
  btn.onclick = () => {
    location.hash = `#/${randomId}`
    randomId = getHashId()
  }
  document.body.appendChild(btn)
}

handleRandomHashRoute()