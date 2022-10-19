class Ekran { 
  constructor() {
    this.sakagetirbuton = document.querySelector('.saka-getir-buton');
    this.sakagetirbuton.addEventListener('click', () => this.sakaGetir());
  }

  async sakaGetir() {
    const rastgeleGorsel = await new ImageAPI().gorselGetir();
    const rastgeleSaka = await new JokeAPI().sakaGetir();
    const ceviri = await new TranslateApi(rastgeleSaka).ceviriYap();
    const tumSonuclar = {
      rastgeleGorsel,
      rastgeleSaka,
      ceviri
    }
    this.ekranaSonuclariYazdir(tumSonuclar);
  }

  ekranaSonuclariYazdir(sonuclar) {
    document.querySelector('.sonuc').innerHTML = `<div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuclar.rastgeleGorsel}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${sonuclar.rastgeleSaka}</p>
            </div>
          </div>
        </div>
        <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-primary pb-4">${sonuclar.ceviri}</p>
              </div>
            </div>
          </div>
      </div>`
  }
}