import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawGifs() {
  let template = ''
  let gifs = store.State.gifs;
  gifs.forEach(g => template += g.Template)
  document.getElementById("gifs").innerHTML = template
}

function _drawMyGifs() {
  let template = ''
  let gifs = store.State.myGifs;
  gifs.forEach(g => template += g.Template)
  document.getElementById("gifs").innerHTML = template
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _drawGifs);
    store.subscribe("myGifs", _drawMyGifs);
    this.getMyGifsAsync()
  }

  async searchAsync() {
    event.preventDefault()
    try {
      await GifsService.searchAsync(event.target.query.value)
    } catch (err) {
      console.log(err);
    }
  }

  async addToCollectionAsync(id) {
    try {
      await GifsService.addToCollectionAsync(id)
    } catch (err) {
      console.log(err);
    }
  }

  async getMyGifsAsync() {
    try {
      await GifsService.getMyGifsAsync()
    } catch (err) {
      console.log(err);
    }
  }
}
