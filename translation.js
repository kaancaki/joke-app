class TranslateApi {
    constructor(ingilizceSaka) { 
        this.baseURL = 'https://api.mymemory.translated.net/';

        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params: {
                q: this.aranacakCumle,
                langpair: 'en|tr'
            }
        });
    }

    async ceviriYap() {
        try {
            const ceviri = await this.axiosNesnesi.get('/get');
            console.log(ceviri.data.matches[0].translation);
            document.getElementById('hero-div').className = "hero is-success is-bold";
            return ceviri.data.matches[0].translation;
        } catch (err) {
            console.log("Şaka çeviri getirilirken bir hata oluştu! => " + err);
            document.getElementById('hero-div').className = "hero is-danger is-bold";
            document.querySelector('.saka-getir-buton').className = "button white is-fullwidth saka-getir-buton";
            return "Çeviri esnasında bir hata ile karşılaşıldı.";
        }
        
    }
}
