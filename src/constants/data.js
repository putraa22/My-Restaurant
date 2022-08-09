import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "Rp. 250.000",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "Rp. 150.000",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "Rp. 70.000",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "Rp. 100.000",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "Rp. 200.000",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "Rp. 300.000",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "Rp. 220.000",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "Rp. 50.000",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "Rp. 60.000",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "Rp. 250.000",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
