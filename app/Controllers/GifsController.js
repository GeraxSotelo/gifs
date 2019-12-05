import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawGifs() {
  let template = ''
  let gifs = store.State.gifs;
  gifs.forEach(g => template += g.Template)
  debugger
  document.getElementById("gifs").innerHTML = template
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _drawGifs);
  }

  async searchAsync() {
    event.preventDefault()
    try {
      await GifsService.searchAsync(event.target.query.value)
    } catch (err) {
      console.log(err);
    }
  }
}
