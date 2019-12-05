import store from "../store.js";
import Gif from "../Models/Gif.js";

let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/geraxsotelo/gifs"
})

let _giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
})
class GifsService {
  async searchAsync(query) {
    let res = await _giphyApi.get("search?api_key=9Se48L43XQqf3fZEUQfKPN5RKdGqrRLY&rating=pg&limit=10&q=" + query)
    console.log("res ", res);

    let results = res.data.data.map(g => new Gif(g))
    store.commit("gifs", results)
  }
}

const service = new GifsService();
export default service;
