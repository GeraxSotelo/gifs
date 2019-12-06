import store from "../store.js";
import Gif from "../Models/Gif.js";

let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/geraxsotelo/gifs"
})

let _giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
})

let key = "9Se48L43XQqf3fZEUQfKPN5RKdGqrRLY"
class GifsService {

  async searchAsync(query) {
    let res = await _giphyApi.get(`search?api_key=${key}&rating=pg&limit=12&q=` + query)
    console.log("search res", res);
    res.data.data.map(g => g.url = g.images.original.mp4) //replace values from 'url' properties with values of 'mp4' properties 
    let results = res.data.data.map(g => new Gif(g))
    store.commit("gifs", results)
  }

  async addToCollectionAsync(id) {
    let gif = store.State.gifs.find(g => g.id == id)
    let res = await _sandbox.post("", gif)
    this.getMyGifsAsync()
  }

  async getMyGifsAsync() {
    let res = await _sandbox.get()
    console.log("my gifs async res", res);
    let results = res.data.data.map(g => new Gif(g))
    console.log("my gifs results ", results)
    store.commit("myGifs", results)
  }

}

const service = new GifsService();
export default service;
