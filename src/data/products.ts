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
    span: "normal",
  },
  {
    id: "chola-dolichos",
    name: "Chola Research Dolichos",
    category: "Beans",
    image: dolichos,
    short: "Sturdy hyacinth bean with tender, flavorful pods.",
    span: "tall",
  },
  {
    id: "sandy-ridge",
    name: "Sandy F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: ridgeGourd,
    short: "Vigorous F1 ridge gourd with uniform cylindrical fruits.",
    details: ["Length: 30-40 cm", "Color: Glossy green", "Strong vine"],
    span: "normal",
  },
  {
    id: "ram-55-chilli",
    name: "Ram-55 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Disease tolerant F1 chilli with excellent uniformity.",
    details: ["Maturity: 90-95 days", "Disease tolerant", "Pungent"],
    span: "wide",
  },
  {
    id: "lakshmi-dolichos",
    name: "Lakshmi Research Dolichos",
    category: "Beans",
    image: dolichos,
    short: "Premium research dolichos with rich pod set.",
    span: "normal",
  },
  {
    id: "kubera-watermelon",
    name: "Kubera F1 Hybrid Watermelon",
    category: "Melon",
    image: watermelon,
    short: "Sweet, crisp F1 watermelon with deep red flesh.",
    span: "tall",
  },
  {
    id: "black-gram",
    name: "Black Gram",
    category: "Pulses",
    image: blackGram,
    short: "High-protein black gram (urad) with uniform grain size.",
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
    span: "wide",
  },
  {
    id: "kanaka-999",
    name: "Kanaka-999 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Highly pungent chilli, green to red maturity.",
    details: ["Length: 9-10 cm", "Highly pungent", "Color: Green → Red"],
    span: "normal",
  },
  {
    id: "yhs-999-maize",
    name: "YHS 999 F1 Hybrid Maize",
    category: "Cereal",
    image: maize,
    short: "Robust F1 maize hybrid with golden, uniform cobs.",
    span: "tall",
  },
  {
    id: "veera-tomato",
    name: "Veera F1 Hybrid Tomato",
    category: "Tomato",
    image: tomato,
    short: "Determinate F1 tomato with firm, deep red fruits.",
    span: "normal",
  },
  {
    id: "arudhra-tomato",
    name: "Arudhra F1 Hybrid Tomato",
    category: "Tomato",
    image: tomato,
    short: "High-yielding tomato with excellent shelf life.",
    span: "normal",
  },
  {
    id: "siri-field-beans",
    name: "Siri Research Field Beans",
    category: "Beans",
    image: fieldBeans,
    short: "Premium field beans with tender pods.",
    span: "normal",
  },
  {
    id: "krishna-5-chilli",
    name: "Krishna-5 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Highly pungent F1 chilli with uniform fruits.",
    details: ["Highly pungent", "Uniform fruits"],
    span: "normal",
  },
  {
    id: "yh-222-okra",
    name: "YH-222 F1 Hybrid Okra",
    category: "Okra",
    image: okra,
    short: "Dark green okra with soft texture and long shelf life.",
    details: ["Dark green fruits", "Soft texture", "Long shelf life"],
    span: "tall",
  },
  {
    id: "venkey-6-ridge",
    name: "Venkey-6 F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: ridgeGourd,
    short: "Strong & vigorous plant with cylindrical fruits.",
    details: ["Length: 35-45 cm", "Weight: 200-220 gm", "Cylindrical shape"],
    span: "normal",
  },
  {
    id: "adya-chilli",
    name: "Adya F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "High yield, pungent F1 chilli for commercial growers.",
    details: ["Length: 8-9 cm", "High yield", "Pungent"],
    span: "wide",
  },
  {
    id: "dolly-26",
    name: "Dolly-26 Research",
    category: "Chilli",
    image: chilli,
    short: "Research chilli line bred for resilience.",
    span: "normal",
  },
  {
    id: "leon-okra",
    name: "Leon F1 Hybrid Okra",
    category: "Okra",
    image: okra,
    short: "Premium F1 okra with smooth, tender pods.",
    span: "normal",
  },
  {
    id: "katahi-bitter",
    name: "Katahi Research Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Research bitter gourd with intense flavor.",
    span: "normal",
  },
  {
    id: "bjeema-marigold",
    name: "Bjeema F1 Hybrid Marigold",
    category: "Flower",
    image: marigold,
    short: "Bright, double-petaled marigold for cut flower & garlands.",
    span: "tall",
  },
  {
    id: "champion-chilli",
    name: "Champion F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Early harvest F1 chilli with long fruits.",
    details: ["Length: 12-16 cm", "Early harvest"],
    span: "normal",
  },
  {
    id: "chervi-22",
    name: "Chervi-22 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Long duration F1 chilli with strong market demand.",
    details: ["Length: 15-17 cm", "Long duration crop", "High demand"],
    span: "wide",
  },
  {
    id: "karthi-bitter",
    name: "Karthi Research Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Vigorous research bitter gourd with continuous bearing.",
    span: "normal",
  },
  {
    id: "divya-27",
    name: "Divya-27 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Medium pungent, high-yielding chilli.",
    details: ["Length: 13-15 cm", "Medium pungent", "High yield"],
    span: "normal",
  },
  {
    id: "mega-watermelon",
    name: "Mega F1 Hybrid Watermelon",
    category: "Melon",
    image: watermelon,
    short: "Large F1 watermelon with high TSS sweetness.",
    span: "normal",
  },
  {
    id: "panja-36",
    name: "Panja-36 F1 Hybrid Chilli",
    category: "Chilli",
    image: chilli,
    short: "Early harvest F1 chilli with strong plant vigor.",
    details: ["Length: 12-16 cm", "Early harvest"],
    span: "normal",
  },
  {
    id: "ruhan-bitter",
    name: "Ruhan F1 Hybrid Bitter Gourd",
    category: "Gourd",
    image: bitterGourd,
    short: "Premium F1 bitter gourd with continuous bearing.",
    span: "tall",
  },
  {
    id: "ram-marigold",
    name: "Ram F1 Hybrid Marigold",
    category: "Flower",
    image: marigold,
    short: "Brilliant orange marigold blooms for festival markets.",
    span: "normal",
  },
  {
    id: "gowrav-bottle",
    name: "Gowrav F1 Hybrid Bottle Gourd",
    category: "Gourd",
    image: bottleGourd,
    short: "F1 bottle gourd with uniform, glossy long fruits.",
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
