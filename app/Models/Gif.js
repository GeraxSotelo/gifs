export default class Gif {
    constructor(data) {
        this.title = data.title
        this.url = data.images.original.mp4 || data.url
    }

    get Template() {
        return `
            <div class="col-6 col-md-3 grid-item">
                <video autoplay>
                    <source
                    src="${this.url}">
                </video>
            </div>
        `
    }
}