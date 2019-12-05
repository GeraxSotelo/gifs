import store from "../store.js";

let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/geraxsotelo/gifs"
})
class GifsService {
  searchAsync(value) {

  }
}

const service = new GifsService();
export default service;
