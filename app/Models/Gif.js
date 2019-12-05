export default class Gif {
    constructor(data) {
        this.title = data.title
        this.url = data.image_mp4_url || data.url
    }

    get Template() {
        return `
            <div class="col-6 col-md-3">
                <video autoplay>
                    <source
                    src="https://media0.giphy.com/media/MrxXXBriEIKBO/giphy.mp4?cid=7c72dc3d960d4b20fe4e00de81f67f6b9f11253856b96c8b&rid=giphy.mp4">
                </video>
            </div>
        `
    }
}