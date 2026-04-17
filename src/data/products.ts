import chilli from "@/assets/products/chilli.jpg";
import ridgeGourd from "@/assets/products/ridge-gourd.jpg";
import bitterGourd from "@/assets/products/bitter-gourd.jpg";
import tomato from "@/assets/products/tomato.jpg";
import okra from "@/assets/products/okra.jpg";
import watermelon from "@/assets/products/watermelon.jpg";
import maize from "@/assets/products/maize.jpg";
import cowpea from "@/assets/products/cowpea.jpg";
import dolichos from "@/assets/products/dolichos.jpg";
import fieldBeans from "@/assets/products/field-beans.jpg";
import blackGram from "@/assets/products/black-gram.jpg";
import bottleGourd from "@/assets/products/bottle-gourd.jpg";
import marigold from "@/assets/products/marigold.jpg";

export type ProductCategory =
  | "Chilli"
  | "Gourd"
  | "Tomato"
  | "Okra"
  | "Melon"
  | "Cereal"
  | "Pulses"
  | "Beans"
  | "Flower";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  short: string;
  details?: string[];
  price: number; // INR per packet
  /** Visual span hint for masonry layout (1 = normal, 2 = wide / tall) */
  span?: "tall" | "wide" | "normal";
}

export const products: Product[] = [
  {
    id: "ganga-cowpea",
    name: "Ganga Research Cowpea",
    category: "Pulses",
    image: cowpea,
    short: "Vigorous, high-yielding research cowpea suitable for rainfed cultivation.",
    price: 180,
    span: "normal",
  },
  {
    id: "chola-dolichos",
    name: "Chola Research Dolichos",
    category: "Beans",
    image: dolichos,
    short: "Sturdy hyacinth bean with tender, flavorful pods.",
    price: 160,
    span: "tall",
  },
  {
    id: "sandy-ridge",
    name: "Sandy F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: ridgeGourd,
    short: "Vigorous F1 ridge gourd with uniform cylindrical fruits.",
    details: ["Length: 30-40 cm", "Color: Glossy green", "Strong vine"],
    price: 240,
    span: "normal",
  },
  {
    id: "ram-55-chilli",
    name: "Ram-55 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Disease tolerant F1 chilli with excellent uniformity.",
    details: ["Maturity: 90-95 days", "Disease tolerant", "Pungent"],
    price: 320,
    span: "wide",
  },
  {
    id: "lakshmi-dolichos",
    name: "Lakshmi Research Dolichos",
    category: "Beans",
    image: dolichos,
    short: "Premium research dolichos with rich pod set.",
    price: 170,
    span: "normal",
  },
  {
    id: "kubera-watermelon",
    name: "Kubera F1 Hybrid Watermelon",
    category: "Melon",
    image: watermelon,
    short: "Sweet, crisp F1 watermelon with deep red flesh.",
    price: 420,
    span: "tall",
  },
  {
    id: "black-gram",
    name: "Black Gram",
    category: "Pulses",
    image: blackGram,
    short: "High-protein black gram (urad) with uniform grain size.",
    price: 150,
    span: "normal",
  },
  {
    id: "surya-bitter",
    name: "Surya F1 Hybrid Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Half long spiny bitter gourd with vigorous vines.",
    details: [
      "Maturity: 60-65 days",
      "Fruit weight: 100-120 gm",
      "Length: 15-18 cm",
      "Color: Dark green",
    ],
    price: 380,
    span: "wide",
  },
  {
    id: "kanaka-999",
    name: "Kanaka-999 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Highly pungent chilli, green to red maturity.",
    details: ["Length: 9-10 cm", "Highly pungent", "Color: Green → Red"],
    price: 340,
    span: "normal",
  },
  {
    id: "yhs-999-maize",
    name: "YHS 999 F1 Hybrid Maize",
    category: "Cereal",
    image: maize,
    short: "Robust F1 maize hybrid with golden, uniform cobs.",
    price: 280,
    span: "tall",
  },
  {
    id: "veera-tomato",
    name: "Veera F1 Hybrid Tomato",
    category: "Tomato",
    image: tomato,
    short: "Determinate F1 tomato with firm, deep red fruits.",
    price: 360,
    span: "normal",
  },
  {
    id: "arudhra-tomato",
    name: "Arudhra F1 Hybrid Tomato",
    category: "Tomato",
    image: tomato,
    short: "High-yielding tomato with excellent shelf life.",
    price: 360,
    span: "normal",
  },
  {
    id: "siri-field-beans",
    name: "Siri Research Field Beans",
    category: "Beans",
    image: fieldBeans,
    short: "Premium field beans with tender pods.",
    price: 165,
    span: "normal",
  },
  {
    id: "krishna-5-chilli",
    name: "Krishna-5 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Highly pungent F1 chilli with uniform fruits.",
    details: ["Highly pungent", "Uniform fruits"],
    price: 330,
    span: "normal",
  },
  {
    id: "yh-222-okra",
    name: "YH-222 F1 Hybrid Okra",
    category: "Okra",
    image: okra,
    short: "Dark green okra with soft texture and long shelf life.",
    details: ["Dark green fruits", "Soft texture", "Long shelf life"],
    price: 290,
    span: "tall",
  },
  {
    id: "venkey-6-ridge",
    name: "Venkey-6 F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: ridgeGourd,
    short: "Strong & vigorous plant with cylindrical fruits.",
    details: ["Length: 35-45 cm", "Weight: 200-220 gm", "Cylindrical shape"],
    price: 250,
    span: "normal",
  },
  {
    id: "adya-chilli",
    name: "Adya F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "High yield, pungent F1 chilli for commercial growers.",
    details: ["Length: 8-9 cm", "High yield", "Pungent"],
    price: 320,
    span: "wide",
  },
  {
    id: "dolly-26",
    name: "Dolly-26 Research",
    category: "Chilli",
    image: chilli,
    short: "Research chilli line bred for resilience.",
    price: 300,
    span: "normal",
  },
  {
    id: "leon-okra",
    name: "Leon F1 Hybrid Okra",
    category: "Okra",
    image: okra,
    short: "Premium F1 okra with smooth, tender pods.",
    price: 295,
    span: "normal",
  },
  {
    id: "katahi-bitter",
    name: "Katahi Research Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Research bitter gourd with intense flavor.",
    price: 350,
    span: "normal",
  },
  {
    id: "bjeema-marigold",
    name: "Bjeema F1 Hybrid Marigold",
    category: "Flower",
    image: marigold,
    short: "Bright, double-petaled marigold for cut flower & garlands.",
    price: 220,
    span: "tall",
  },
  {
    id: "champion-chilli",
    name: "Champion F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Early harvest F1 chilli with long fruits.",
    details: ["Length: 12-16 cm", "Early harvest"],
    price: 340,
    span: "normal",
  },
  {
    id: "chervi-22",
    name: "Chervi-22 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Long duration F1 chilli with strong market demand.",
    details: ["Length: 15-17 cm", "Long duration crop", "High demand"],
    price: 360,
    span: "wide",
  },
  {
    id: "karthi-bitter",
    name: "Karthi Research Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Vigorous research bitter gourd with continuous bearing.",
    price: 340,
    span: "normal",
  },
  {
    id: "divya-27",
    name: "Divya-27 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Medium pungent, high-yielding chilli.",
    details: ["Length: 13-15 cm", "Medium pungent", "High yield"],
    price: 330,
    span: "normal",
  },
  {
    id: "mega-watermelon",
    name: "Mega F1 Hybrid Watermelon",
    category: "Melon",
    image: watermelon,
    short: "Large F1 watermelon with high TSS sweetness.",
    price: 430,
    span: "normal",
  },
  {
    id: "panja-36",
    name: "Panja-36 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Early harvest F1 chilli with strong plant vigor.",
    details: ["Length: 12-16 cm", "Early harvest"],
    price: 340,
    span: "normal",
  },
  {
    id: "ruhan-bitter",
    name: "Ruhan F1 Hybrid Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Premium F1 bitter gourd with continuous bearing.",
    price: 370,
    span: "tall",
  },
  {
    id: "ram-marigold",
    name: "Ram F1 Hybrid Marigold",
    category: "Flower",
    image: marigold,
    short: "Brilliant orange marigold blooms for festival markets.",
    price: 230,
    span: "normal",
  },
  {
    id: "gowrav-bottle",
    name: "Gowrav F1 Hybrid Bottle Gourd",
    category: "Gourd",
    image: bottleGourd,
    short: "F1 bottle gourd with uniform, glossy long fruits.",
    price: 260,
    span: "normal",
  },
];

export const productCategories: ProductCategory[] = [
  "Chilli",
  "Gourd",
  "Tomato",
  "Okra",
  "Melon",
  "Cereal",
  "Pulses",
  "Beans",
  "Flower",
];
