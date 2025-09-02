window.fallbackProducts = {
  "orange-wide-leg": {
    title: "Orange Wide Leg",
    description: "Comfortable wide-leg pants in bright orange.",
    price: 5900, // price in cents
    images: ["{{ 'OrangeWideLeg.png' | asset_url }}"],
    variants: [
      { id: 101, title: "Small / Orange", price: 5900 },
      { id: 102, title: "Medium / Orange", price: 5900 },
      { id: 103, title: "Large / Orange", price: 5900 }
    ]
  },
  "tailored-jacket": {
    title: "Tailored Jacket",
    description: "A sleek tailored jacket for formal wear.",
    price: 12900,
    images: ["{{ 'TailoredJacket.png' | asset_url }}"],
    variants: [
      { id: 201, title: "Small / Black", price: 12900 },
      { id: 202, title: "Medium / Black", price: 12900 },
      { id: 203, title: "Large / Black", price: 12900 }
    ]
  },
  "accordion-pleated-dress": {
    title: "Accordion Pleated Dress",
    description: "Elegant pleated dress for evenings.",
    price: 8900,
    images: ["{{ 'AccordionPleatedDress.png' | asset_url }}"],
    variants: [
      { id: 301, title: "Small / Blue", price: 8900 },
      { id: 302, title: "Medium / Blue", price: 8900 },
      { id: 303, title: "Large / Blue", price: 8900 }
    ]
  },
  "green-trench-coat": {
    title: "Green Trench Coat",
    description: "Classic trench coat in deep green.",
    price: 15900,
    images: ["{{ 'GreenTrenchCoat.png' | asset_url }}"],
    variants: [
      { id: 401, title: "Small / Green", price: 15900 },
      { id: 402, title: "Medium / Green", price: 15900 },
      { id: 403, title: "Large / Green", price: 15900 }
    ]
  },
  "tennis-blue-tshirt": {
    title: "Tennis Blue T-Shirt",
    description: "Sporty T-shirt in tennis blue color.",
    price: 3900,
    images: ["{{ 'TennisBlueT-Shirt.png' | asset_url }}"],
    variants: [
      { id: 501, title: "Small / Blue", price: 3900 },
      { id: 502, title: "Medium / Blue", price: 3900 },
      { id: 503, title: "Large / Blue", price: 3900 }
    ]
  },
  "long-sleeve-tennis-top": {
    title: "Long Sleeve Tennis Top",
    description: "Performance-ready long sleeve tennis top.",
    price: 4900,
    images: ["{{ 'LongSleeveTennisTop.png' | asset_url }}"],
    variants: [
      { id: 601, title: "Small / White", price: 4900 },
      { id: 602, title: "Medium / White", price: 4900 },
      { id: 603, title: "Large / White", price: 4900 }
    ]
  }
};
