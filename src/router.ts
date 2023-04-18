export default class Route {
  newRouteName = ''
  oldRouteName = ''

  constructor() {

  }
  getNewRouteName() {
    return this.newRouteName
  }
  getOldRouteName() {
    return this.oldRouteName
  }
  hashRoute(e: Event) {
    console.log("hashRoute", e);
  }
  historyRoute(e: Event) {
    console.log("historyRoute", e);
  }
  hashChange(e: HashChangeEvent) {
    console.log("hashChange", e);
    this.newRouteName = e.newURL
    this.oldRouteName = e.oldURL
  }
  init() {
    console.log('init');
    window.addEventListener("pushState", this.hashRoute)
    window.addEventListener("replaceState", this.historyRoute)
    window.addEventListener("hashchange", this.hashChange)
  }
  destroy() {
    window.removeEventListener("pushState", this.hashRoute)
    window.removeEventListener("replaceState", this.historyRoute)
    window.removeEventListener("hashchange", this.hashChange)
  }
}