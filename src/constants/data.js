import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imageUrl: images.award2,
    title: "Bib Gourmond",
    subTitle: "Bib Gourmand, where exceptional flavor meets everyday delight.",
  },
  {
    imageUrl: images.award1,
    title: "Rising Star",
    subTitle:
      "Like a meteor in the night sky, the 'Rising Star' shines with boundless potential.",
  },
  {
    imageUrl: images.award5,
    title: "AA Hospitality",
    subTitle:
      "AA Hospitality, setting the gold standard in the world of excellence.",
  },
  {
    imageUrl: images.award3,
    title: "Outstanding Chef",
    subTitle:
      "The preeminent chef in this realm, crafting culinary art with every bite.",
  },
];

export default { wines, cocktails, awards };
