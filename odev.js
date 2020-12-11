/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

const person = {
  name: "John",
  message: function () {
    console.log("Hello, " + this.name)
  }
}

const messageFn = person.message;
messageFn.call(person)


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
const numbers = {
  numbersArray: [[10, 20, 30], 2],
  multiply: function () {
    this.numbersArray[0].map((number, numberIndex) => {
      const result = number * this.numbersArray[1];
      console.log(result)
    })
  }
};

console.log(numbers.multiply());


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
const isValidName = (name) => {
  const checkLetters = /^[A-Za-z]+$/;
  return checkLetters.test(name)
};

const isValidName = (name) => {
  if (typeof (name) === "string") {
    const trimmedName = name.trim();
    const splittedName = trimmedName.split(" ");
    for (let i = 0; i < splittedName.length; i++) {
      if (splittedName[i].length <= 1) {
        break;
      } else {
        return true;
      }

    }
  }
}

console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonksiyonu kac derse girildigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
const katilimSaati = (dersSayisi, dersSuresi) => {
  if (typeof dersSayisi == "boolean" || typeof dersSuresi == "boolean") {
    return false;
  }

  if (!isFinite(+dersSuresi) || !isFinite(+dersSayisi)) {
    return false;
  }

  if (dersSuresi == null || dersSayisi == null) {
    return false;
  }

  if (dersSayisi.length == 0 || dersSuresi.length == 0) {
    return false;
  }

  if (typeof +dersSayisi !== "number" || typeof +dersSuresi !== "number") {
    return false;
  }

  return Math.floor(dersSayisi) * Math.floor(dersSuresi);
}




