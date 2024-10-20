document.querySelectorAll('.answer').forEach(painike => {
  painike.addEventListener('click', () => {
      const samanKysymyksenPainikkeet = document.querySelectorAll(`button[data-question="${painike.dataset.question}"]`);
      samanKysymyksenPainikkeet.forEach(p => p.classList.remove('active'));
      
      painike.classList.add('active');
  });
});

  
  const skinTypeDescriptions = {
    kuiva: `Testin tulosten perusteella sinulla on kuiva iho. Kuivan ihon hoidossa on tärkeää säännöllinen puhdistus aamuin illoin oikeanlaisilla tuotteilla.
            Kuivalle iholle soveltuvia puhdistus tuotteita ovat: puhdistusmaito ja puhdistus öljyt. Kuiva iho kaipaa tehokasa kosteuttamista, joten valitse itsellesi mieleinen kasvovesi
            (mielellään herkälle iholle soveltuva) ja sen lisäksi yö- ja päivävoide. Kasvoveden käyttö on tärkeää, sillä se tehostaa seerumien, ampullien ja voiteiden imeytymistä.
            Kuivan ihon päivävoitee/ yövoiteen olisi hyvä sisältää esim. hyaluronhappoa (kosteuttaa ja kiinteyttää), aloe veraa (kosteuttaa), sheavoita (kosteuttaa), skvaleenia (kosteuttaa, kiinteyttää),
            E-vitamiinia (vahvistaa ja puolustaa ihoa). Päivävoiteen olisi hyvä sisältää aurinkosuoja minimissään 30 SPF, mielellään 50 SPF, sillä aurinkosuoja ehkäisee ihon vanhenemista ja väripigmenttien muodostumista.

            Kuivaa ihoa olisi hyvä kuoria säännöllisesti kahden viikon välein. Kun ihoa kuorii säännöllisesti, se myös hyödyntää paremmin voiteista ja naamioista saadut hoitavat aineet. Kuorinnaksi sopivat kevyet entsyymi pohjaiset kuorinnat.
            Entsyymi pohjaiset kuorinnat vaikuttavat kasvoilla oman aikansa (tarkista aina aika tuotteesta), jonka jälkeen pestään pois. Kuorinnan jälkeen on hyvä laittaa kasvoille kasvovettä ja levittää kasvonaamio.
            Kasvonaamioita on markkinoilla paljon erilaisia. Tarkista tuotteesta naamion käyttöohjeet, niin saat kaiken hyödyn irti naamiostasi. Voit valita kosteuttavan, tai kiinteyttävän naamion omien mieltymystesi mukaan. `,
    sekaiho: `Testin tulosten perusteella sinulla on sekaiho. Sekaihon hoidossa on tärkeää säännöllinen puhdistus aamuin illoin oikeanlaisilla tuotteilla. Sekaiholle soveltuvia puhdistus tuotteita ovat: puhdistusgeelit -vaahdot ja -maidot.
            Kuitenkin sekaiho kaipaa myös säännöllistä kosteuttamista, joten valitse itsellesi mieleinen kasvovesi ja sen lisäksi yö- ja päivävoide sekaiholle. Kasvoveden käyttö on tärkeää, sillä se tehostaa seerumien, ampullien ja voiteiden imeytymistä.
            Sekaihon päivävoitee/ yövoiteen olisi hyvä sisältää esim. hyaluronhappoa (kosteuttaa ja kiinteyttää), aloe veraa (kosteuttaa), E-vitamiinia (vahvistaa ja puolustaa ihoa).
            Päivävoiteen olisi hyvä sisältää aurinkosuoja minimissään 30 SPF, mielellään 50 SPF, sillä aurinkosuoja ehkäisee ihon vanhenemista ja väripigmenttien muodostumista.

            Sekaihoa olisi hyvä kuoria säännöllisesti kahden viikon välein. Kuorinnaksi sopivat kevyet entsyymi pohjaiset kuorinnat tai rakeelliset kuorinnat.
            Entsyymi pohjaiset kuorinnat vaikuttavat kasvoilla oman aikansa (tarkista aina aika tuotteesta), jonka jälkeen pestään pois. Rakeelliset kuorinnat hierotaan kevyesti kasvoille ja pestään pois.
            Kuorinnan jälkeen on hyvä laittaa kasvoille kasvovettä ja levittää kasvonaamio. Kasvonaamioita on markkinoilla paljon erilaisia. Tarkista tuotteesta naamion käyttöohjeet, niin saat kaiken hyödyn irti naamiostasi.
            Voit valita sekaihollesi kosteuttavan, puhdistavan, kirkastavan tai kiinteyttävän naamion omien mieltymystesi mukaan. `,
    rasvoittuva: `Testin tulosten perusteella sinulla on rasvoittuva iho. Rasvoittuvan ihon hoidossa on tärkeää säännöllinen puhdistus aamuin illoin oikeanlaisilla tuotteilla.
            Rasvoittuvalle soveltuvia puhdistus tuotteita ovat: puhdistusgeelit ja -vaahdot. Kuitenkin rasvoittuva iho kaipaa myös säännöllistä kosteuttamista, joten valitse itsellesi mieleinen kasvovesi ja sen lisäksi yö- ja päivävoide.
            Kasvoveden käyttö on tärkeää, sillä se tehostaa seerumien, ampullien ja voiteiden imeytymistä. Rasvaisen ihon voiteiksi sopii usein geelimäiset yö- ja päivävoiteet, jotka eivät lisää rasvaisuuden tunnetta iholla.
            Rasvoittuvan ihon päivävoitee/ yövoiteen olisi hyvä sisältää esim. hyaluronhappoa (kosteuttaa ja kiinteyttää), salisyylihappo (supistaa ihohuokoisia), C-vitamiinia (uudistaa ihoa), E-vitamiinia (vahvistaa ja puolustaa ihoa).
            Päivävoiteen olisi hyvä sisältää aurinkosuoja minimissään 30 SPF, mielellään 50 SPF, sillä aurinkosuoja ehkäisee ihon vanhenemista ja väripigmenttien muodostumista.

            Rasvaista ihoa olisi hyvä kuoria säännöllisesti kahden viikon välein. Kuorinnaksi sopivat kevyet entsyymi pohjaiset kuorinnat tai rakeelliset kuorinnat. Jos ihollasi on paljon ärtyneitä epäpuhtauksia
            suositeltavaa olisi käyttää kuorintana entsyymi kuorintaa, sillä se on hellävarainen eikä rasita ihoa entisestään. Entsyymi pohjaiset kuorinnat vaikuttavat kasvoilla oman aikansa (tarkista aina aika tuotteesta),
            jonka jälkeen pestään pois. Rakeelliset kuorinnat hierotaan kevyesti kasvoille ja pestään pois.  Kuorinnan jälkeen on hyvä laittaa kasvoille kasvovettä ja levittää kasvonaamio. Kasvonaamioita on markkinoilla paljon erilaisia.
            Tarkista tuotteesta naamion käyttöohjeet, niin saat kaiken hyödyn irti naamiostasi. Voit valita ihollesi puhdistavan, kirkastavan tai kiinteyttävän naamion omien mieltymystesi mukaan. `,
    normaali: `Testin tulosten perusteella sinulla on normaali iho. Sen hoidossa on tärkeää säännöllinen puhdistus aamuin illoin oikeanlaisilla tuotteilla. Normaalille iholle soveltuvia puhdistus tuotteita ovat: puhdistusvaahdot ja -maidot.
            Normaali ihokin kaipaa myös säännöllistä kosteuttamista, joten valitse itsellesi mieleinen kasvovesi ja sen lisäksi yö- ja päivävoide. Kasvoveden käyttö on tärkeää, sillä se tehostaa seerumien, ampullien ja voiteiden imeytymistä.
            Normaalin ihon päivävoiteen/ yövoiteen olisi hyvä sisältää esim. hyaluronhappoa (kosteuttaa ja kiinteyttää), C-vitamiinia (uudistaa ihoa), E-vitamiinia (vahvistaa ja puolustaa ihoa). 
            Päivävoiteen olisi hyvä sisältää aurinkosuoja minimissään 30 SPF, mielellään 50 SPF, sillä aurinkosuoja ehkäisee ihon vanhenemista ja väripigmenttien muodostumista.

            Normaalia ihoa olisi hyvä kuoria säännöllisesti kahden viikon välein. Kuorinnaksi sopivat kevyet entsyymi pohjaiset kuorinnat tai rakeelliset kuorinnat.
            Entsyymi pohjaiset kuorinnat vaikuttavat kasvoilla oman aikansa (tarkista aina aika tuotteesta), jonka jälkeen pestään pois. Rakeelliset kuorinnat hierotaan kevyesti kasvoille ja pestään pois.
            Kuorinnan jälkeen on hyvä laittaa kasvoille kasvovettä ja levittää kasvonaamio. Kasvonaamioita on markkinoilla paljon erilaisia. Tarkista tuotteesta naamion käyttöohjeet, niin saat kaiken hyödyn irti naamiostasi.
            Voit valita normaalille ihollesi kosteuttavan, puhdistavan, kirkastavan tai kiinteyttävän naamion omien mieltymystesi mukaan. `
  };
  
  document.getElementById('skincare-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {};
    document.querySelectorAll('.answer.active').forEach(function(button) {
        answers[button.dataset.question] = button.dataset.answer;
    });

    let skinType = '';
    if (answers[1] === 'kyllä' && answers[2] === 'ei' && answers[3] === 'ei' && answers[4] === 'ei yhtään') {
        skinType = 'kuiva';
    } else if (answers[1] === 'ei' && answers[2] === 'kyllä' && answers[3] === 'kyllä' && answers[4] === 'paljon') {
        skinType = 'rasvoittuva';
    } else if (answers[1] === 'kyllä' && answers[2] === 'kyllä' && answers[3] === 'kyllä' && (answers[4] === 'vähän' || answers[4] === 'paljon')) {
        skinType = 'sekaiho';
    } else {
        skinType = 'normaali';
    }

    const resultText = document.getElementById('result-text');
    resultText.textContent = skinTypeDescriptions[skinType];
    resultText.style.display = 'block';

    resultText.scrollIntoView({ behavior: 'smooth' });
});

