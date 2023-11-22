import products from "./mock.json" assert { type: "json" };

//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock
console.log(
  "Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;"
);

let prodotti = products.productsList;
console.log(prodotti);

console.log(
  "Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie..."
);
prodotti.forEach((prod) => {
  if (prod.id === 3) {
    console.log(prod);
  }
});

console.log(
  "Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro"
);
prodotti.forEach((prod) => {
  if (prod.price < 200) {
    console.log(prod);
  }
});

console.log(
  "Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)"
);
prodotti.forEach((prod) => {
  if (prod.id === 8) {
    console.log(prod);
  }
});

console.log(
  "Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock"
);
prodotti.forEach((prod) => {
  if (prod.id < 10) {
    console.log(prod.name);
  }
});
