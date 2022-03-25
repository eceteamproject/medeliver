export default {
  users: [
    { username: "regular", accessLevel: 1, password: "password" },
    { username: "admin", accessLevel: 0, password: "password" },
  ],
  initProducts: [
    {
      id: 1,
      name: "Tylenol",
      stock: 10,
      price: 9.99,
      shortDesc:
        "Tylenol® Arthritis Pain caplets work with your body to be tough on pain",
      description:
        "It relieves arthritis pain fast and provides extended relief that lasts all work day. Up to 8 hours of relief. Containing 650 mg of acetaminophen, these caplets offer fast- acting relief of arthritis pain.Each caplet has a patented bi - layer design for fast and long- lasting relief.",
    },
    {
      id: 2,
      name: "Diarrhea Relief",
      stock: 0,
      price: 8.99,
      shortDesc: "Rapid relief of diarrhea, often with just one dose",
      description:
        "Product monograph available to health professionals on request.Store between 15°C and 30°C. Clinical studies indicate that diarrhea can be controlled with a single dose in 50 % of patients' case",
    },
    {
      id: 3,
      name: "Systane Ultra Lubricant Eye Drops",
      stock: 35,
      price: 4.99,
      shortDesc:
        "Immediate comfort and extended protection for dry eye due to insufficient quantity or quality of natural tears",
      description:
        "Systane® Ultra is clinically proven to deliver extended protection and lasting relief. Working with your natural tears, Systane® Ultra provides immediate comfort and relief of dry eye symptoms, wherever and whenever you need it.",
    },
    {
      id: 4,
      name: "Gaviscon Extra Strength Soothing Antacid",
      stock: 5,
      price: 17.99,
      shortDesc:
        "For day and nighttime relief of heartburn, acid reflux and GERD (gastro esophageal reflux disease) symptoms",
      description:
        "Feel Gaviscon's foaming action start to work as soon as you take it. Forms a protective barrier that blocks acid reflux for hours. Liquid formula. Sugar, lactose and gluten free.",
    },
  ],
};
