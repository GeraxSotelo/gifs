export default class Gif {
    constructor(data) {
        this.id = data.id || data._id
        this.title = data.title
        this.url = data.images.original.mp4 || data.url
    }

    get Template() {
        return `
            <div class="col-6 col-sm-4 col-md-3">
                <video autoplay>
                  <source src="${this.url}">
                </video>
                <button class="btn btn-success btn-block"
                  onclick="app.gifsController.addToCollectionAsync('${this.id}')">Add to Collection</button>
            </div>
        `
    }
}