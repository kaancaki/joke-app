class ImageAPI {
    constructor() { 
        this.baseURL = "https://picsum.photos";
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL
        });
    }

    async gorselGetir() {
        try {
            const resimResponse = await this.axiosNesnesi.get('/1280/960');
            console.log(resimResponse.request.responseURL);
            document.getElementById('hero-div').className = "hero is-success is-bold";
            return resimResponse.request.responseURL;
        } catch (err) {
            console.log("Şaka görseli getirilirken bir hata oluştu! => " + err);
            return 'https://bulma.io/images/placeholders/1280x960.png';
        };
    };
}