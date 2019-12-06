export default class Gif {
    constructor(data) {
        this.id = data.id || data._id
        this.title = data.title
        this.url = data.url
        this.user = data.user || ""
    }

    get Template() {
        let template =
            `<div class="col-6 col-sm-4 col-md-3">
                <video autoplay>
                  <source src="${this.url}">
                </video>`
        if (this.user) {
            template += `<button class="btn btn-success btn-block"
                    onclick="app.gifsController.deleteGifAsync('${this.id}')">Delete from Collection</button>`
        } else {
            template += `<button class="btn btn-success btn-block"
                    onclick="app.gifsController.addToCollectionAsync('${this.id}')">Add to Collection</button>`
        }

        template += `</div > `

        return template
    }

}