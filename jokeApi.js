class JokeAPI { 
    constructor() {
        this.baseURL = "https://v2.jokeapi.dev";
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params:{
                type: 'single'
            }
        });
    }

    async sakaGetir() {
        try {
            const sakaResponse = await this.axiosNesnesi.get('/joke/Programming');
            console.log(sakaResponse.data.joke);
            document.getElementById('hero-div').className = "hero is-success is-bold";
            return sakaResponse.data.joke;
        } catch (err) {
            console.log("Şaka getirilirken bir hata oluştu! => " + err);
            document.getElementById('hero-div').className = "hero is-danger is-bold";
            document.querySelector('.saka-getir-buton').className = "button white is-fullwidth saka-getir-buton";
            return "Şaka getirilirken bir hata ile karşılaşıldı"
        };
    };
}