import gangaCowpea from "@/assets/products/ganga-cowpea.jpg";
import cholaDolichos from "@/assets/products/chola-dolichos.jpg";
import sandyRidge from "@/assets/products/sandy-ridge.jpg";
import ram55Chilli from "@/assets/products/ram-55-chilli.jpg";
import lakshmiDolichos from "@/assets/products/lakshmi-dolichos.jpg";
import kuberaWatermelon from "@/assets/products/kubera-watermelon.jpg";
import blackGramImg from "@/assets/products/black-gram.jpg";
import suryaBitter from "@/assets/products/surya-bitter.jpg";
import kanaka999 from "@/assets/products/kanaka-999.jpg";
import yhs999Maize from "@/assets/products/yhs-999-maize.jpg";
import veeraTomato from "@/assets/products/veera-tomato.jpg";
import arudhraTomato from "@/assets/products/arudhra-tomato.jpg";
import siriFieldBeans from "@/assets/products/siri-field-beans.jpg";
import krishna5Chilli from "@/assets/products/krishna-5-chilli.jpg";
import yh222Okra from "@/assets/products/yh-222-okra.jpg";
import venkey6Ridge from "@/assets/products/venkey-6-ridge.jpg";
import adyaChilli from "@/assets/products/adya-chilli.jpg";
import dolly26 from "@/assets/products/dolly-26.jpg";
import leonOkra from "@/assets/products/leon-okra.jpg";
import katahiBitter from "@/assets/products/katahi-bitter.jpg";
import bjeemaMarigold from "@/assets/products/bjeema-marigold.jpg";
import championChilli from "@/assets/products/champion-chilli.jpg";
import chervi22 from "@/assets/products/chervi-22.jpg";
import karthiBitter from "@/assets/products/karthi-bitter.jpg";
import divya27 from "@/assets/products/divya-27.jpg";
import megaWatermelon from "@/assets/products/mega-watermelon.jpg";
import panja36 from "@/assets/products/panja-36.jpg";
import ruhanBitter from "@/assets/products/ruhan-bitter.jpg";
import ramMarigold from "@/assets/products/ram-marigold.jpg";
import gowravBottle from "@/assets/products/gowrav-bottle.jpg";
import amaranChilli from "@/assets/products/amaran-chilli.jpg";

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
}

export const products: Product[] = [
  {
    id: "ganga-cowpea",
    name: "Ganga Research Cowpea",
    category: "Pulses",
    image: gangaCowpea,
    short: "Vigorous, high-yielding research cowpea suitable for rainfed cultivation.",
  },
  {
    id: "chola-dolichos",
    name: "Chola Research Dolichos",
    category: "Beans",
    image: cholaDolichos,
    short: "Sturdy hyacinth bean with tender, flavorful pods.",
  },
  {
    id: "sandy-ridge",
    name: "Sandy F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: sandyRidge,
    short:
      "Dark green, shiny, and cylindrical with deep, prominent ridges.",
    details: [
      "Size & Weight: 30–45 cm long, 180–250 gm avg",
      "Maturity: Early — first picking 45–55 days after sowing",
      "Shape: Cylindrical with deep prominent ridges",
    ],
  },
  {
    id: "ram-55-chilli",
    name: "Ram-55 F1 Hybrid Chilli",
    category: "Chilli",
    image: ram55Chilli,
    short:
      "Vigorous, high-yielding chilli with high tolerance to TOLCV — best in Kharif and Summer.",
    details: [
      "Maturity: 90–95 days after transplanting",
      "Plant Habit: Vigorous, high-yielding",
      "Fruit Color: Glossy green (immature) → red (mature)",
      "Fruit Shape: Long & medium",
      "Disease Tolerance: High tolerance to TOLCV",
      "Best Season: Kharif (May–June) & Summer (Jan–Feb)",
    ],
  },
  {
    id: "lakshmi-dolichos",
    name: "Lakshmi Research Dolichos",
    category: "Beans",
    image: lakshmiDolichos,
    short: "Premium research dolichos with rich pod set.",
  },
  {
    id: "kubera-watermelon",
    name: "Kubera F1 Hybrid Watermelon",
    category: "Melon",
    image: kuberaWatermelon,
    short:
      "High-yielding F1 watermelon ideal for long-distance transport, maturing in 80–85 days.",
    details: [
      "Fruit: 9–12 kg oblong",
      "Flesh: Deep crimson, 12–13% TSS sugar",
      "Rind: Striped light/dark green",
      "Best for: Summer cultivation",
    ],
  },
  {
    id: "black-gram",
    name: "Black Gram",
    category: "Pulses",
    image: blackGramImg,
    short: "High-protein black gram (urad) with uniform grain size.",
  },
  {
    id: "surya-bitter",
    name: "Surya F1 Hybrid Bitter Gourd",
    category: "Gourd",
    image: suryaBitter,
    short:
      "Half long spiny F1 bitter gourd with vigorous vines and dark green fruits.",
    details: [
      "Type: Half Long Spiny",
      "Maturity: 60–65 days",
      "Fruit weight: 100–120 gm",
      "Length: 15–18 cm",
      "Plant: Highly vigorous vines",
      "Colour: Dark green",
      "Fruit type: Medium long spine",
    ],
  },
  {
    id: "kanaka-999",
    name: "Kanaka-999 F1 Hybrid Chilli",
    category: "Chilli",
    image: kanaka999,
    short:
      "A very highly pungent, attractive dual-purpose chilli hybrid which is easy to pick and bears uniform fruits 9–10 cm long and 0.8–1 cm in diameter. Dark green when immature, turns red on maturity, with moderately wrinkled surface.",
  },
  {
    id: "yhs-999-maize",
    name: "YHS-999 F1 Hybrid Maize",
    category: "Cereal",
    image: yhs999Maize,
    short:
      "Yadvi YHS-999 Elite is a medium-maturity hybrid maize known for high yield and superior standability with attractive orange grains.",
    details: [
      "Maturity: 120–140 days",
      "Yield: 35–40+ quintal/acre",
      "Seasons: Kharif & Rabi",
      "Strong roots and tight husk cover for protection against pests and rain",
    ],
  },
  {
    id: "veera-tomato",
    name: "Veera F1 Hybrid Tomato",
    category: "Tomato",
    image: veeraTomato,
    short:
      "High-yielding, heat-tolerant tomato popular for commercial farming and home gardens. Medium-sized, firm, oblong red fruits (80–90 gm) with good transportability, strong disease resistance and excellent shelf life.",
  },
  {
    id: "arudhra-tomato",
    name: "Arudhra F1 Hybrid Tomato",
    category: "Tomato",
    image: arudhraTomato,
    short:
      "Flat round, uniform tomato with attractive deep red colour and high cracking tolerance.",
    details: [
      "Shape: Flat round, uniform, no green shoulders",
      "Colour: Deep red, glossy when ripe",
      "Weight: 80–100 grams",
      "Firmness: Very firm, suitable for long-distance transport",
    ],
  },
  {
    id: "siri-field-beans",
    name: "Siri Research Field Beans",
    category: "Beans",
    image: siriFieldBeans,
    short: "Premium field beans with tender pods.",
  },
  {
    id: "krishna-5-chilli",
    name: "Krishna-5 F1 Hybrid Chilli",
    category: "Chilli",
    image: krishna5Chilli,
    short:
      "A very highly pungent, attractive dual-purpose chilli hybrid which is easy to pick and bears uniform fruits 9–10 cm long and 0.8–1 cm in diameter. Dark green when immature, turns red on maturity, with moderately wrinkled surface.",
  },
  {
    id: "yh-222-okra",
    name: "YH-222 F1 Hybrid Bendhi (Okra)",
    category: "Okra",
    image: yh222Okra,
    short:
      "Known for its robust growth and long shelf life — a reliable choice for farmers and gardeners alike. Medium-height plant with 2–4 branches; fruits are dark green, densely clustered, with a soft texture for a high-quality harvest.",
  },
  {
    id: "venkey-6-ridge",
    name: "Venkey-6 F1 Hybrid Ridge Gourd",
    category: "Gourd",
    image: venkey6Ridge,
    short: "Strong & vigorous plant with cylindrical fruits.",
    details: ["Length: 35–45 cm", "Weight: 200–220 gm", "Cylindrical shape"],
  },
  {
    id: "adya-chilli",
    name: "Adya F1 Hybrid Chilli",
    category: "Chilli",
    image: adyaChilli,
    short:
      "A very high pungent and high-yielding dual-purpose chilli hybrid with fruit length 8–9 cm and diameter 0.7–0.9 cm. Dark green when immature, glossy red on maturity, with moderately wrinkled surface and high capsaicin.",
  },
  {
    id: "dolly-26",
    name: "Dolly-26 Research",
    category: "Chilli",
    image: dolly26,
    short: "Research chilli line bred for resilience.",
  },
  {
    id: "leon-okra",
    name: "Leon F1 Hybrid Bendhi (Okra)",
    category: "Okra",
    image: leonOkra,
    short:
      "A high-yielding variety known for its vigorous, tall plants and dark green, 14–16 cm long pods. Popular for commercial cultivation due to its high virus tolerance (YVMV/ELCV), zigzag bearing pattern and early maturity (43–50 days).",
  },
  {
    id: "katahi-bitter",
    name: "Katahi Research Bitter Gourd",
    category: "Gourd",
    image: katahiBitter,
    short: "Research bitter gourd with intense flavor.",
  },
  {
    id: "bjeema-marigold",
    name: "Bheema (Orange Queen) F1 Hybrid Marigold",
    category: "Flower",
    image: bjeemaMarigold,
    short:
      "A high-yielding hybrid marigold known for its tall, erect plants (60–100 cm) and large, golden-orange, double-floret flowers. Popular for high yield, fast maturity (45–65 days) and excellent suitability for long-distance transport — ideal for cut flowers and commercial farming.",
  },
  {
    id: "champion-chilli",
    name: "Champion F1 Hybrid Chilli",
    category: "Chilli",
    image: championChilli,
    short:
      "Fruit length 12–16 cm, width 1.2–1.4 cm, with a short, early harvest cycle — often ready in 45–55 days.",
  },
  {
    id: "chervi-22",
    name: "Chervi-22 F1 Hybrid Chilli",
    category: "Chilli",
    image: chervi22,
    short:
      "Long-strong bushy plant with first harvest at 50–55 DAP. A long-duration crop with heavy demand for both green and red — dry chilli weight is more than other varieties.",
    details: [
      "Fruit length: 15–17 cm, width 1.5–2 cm",
      "First harvest: 50–55 DAP",
      "Disease tolerance",
      "Long, strong bushy plant",
      "Long-duration crop — more production",
      "Dry chilli weight more than other varieties",
      "Heavy demand for both green and red",
    ],
  },
  {
    id: "karthi-bitter",
    name: "Karthi Research Bitter Gourd",
    category: "Gourd",
    image: karthiBitter,
    short: "Vigorous research bitter gourd with continuous bearing.",
  },
  {
    id: "divya-27",
    name: "Divya-27 F1 Hybrid Chilli",
    category: "Chilli",
    image: divya27,
    short:
      "Light green, semi-wrinkled fruits with firm skin. Very early variety with high yield, good heat tolerance and firm fruit suitable for transport.",
    details: [
      "Size: Length 13–15 cm, thickness 1.3 cm",
      "Pungency: Medium — suited for fresh market",
      "Harvest: Very early (Kharif/Rabi)",
      "Plant: Semi-erect with excellent branching",
      "Performance: High yield, heat tolerant, firm transport-friendly fruit",
    ],
  },
  {
    id: "mega-watermelon",
    name: "Mega F1 Hybrid Watermelon",
    category: "Melon",
    image: megaWatermelon,
    short:
      "A premium F1 hybrid watermelon known for its black, oblong, 3–5 kg fruits and deep red, crispy flesh with high sugar content (13% TSS). Popular for high yield, rapid 65–70 day maturity and durability for long-distance transport.",
  },
  {
    id: "panja-36",
    name: "Panja-36 F1 Hybrid Chilli",
    category: "Chilli",
    image: panja36,
    short:
      "Fruit length 12–16 cm, width 1.2–1.4 cm, with a short, early harvest cycle — often ready in 45–55 days.",
  },
  {
    id: "ruhan-bitter",
    name: "Ruhan F1 Hybrid Bitter Gourd",
    category: "Gourd",
    image: ruhanBitter,
    short:
      "High-yielding, early-maturing F1 hybrid bitter gourd suited for both small and medium-spiny segments. Produces dark green, firm, 12–14 cm long fruits with excellent shipping quality and strong disease tolerance.",
    details: [
      "Maturity: 52–55 days",
      "Fruit length: 12–14 cm",
      "Colour: Dark green, firm",
      "Strong disease tolerance & shipping quality",
    ],
  },
  {
    id: "ram-marigold",
    name: "Ram F1 Hybrid Marigold",
    category: "Flower",
    image: ramMarigold,
    short:
      "A high-yielding, yellow F1 hybrid marigold known for its tall, bushy growth (60–90 cm) and large, firm 'tennis ball' flowers — popular for commercial cut flower use. Suitable for all seasons in India with high yield potential and excellent transportation quality.",
  },
  {
    id: "gowrav-bottle",
    name: "Gowrav F1 Hybrid Bottle Gourd",
    category: "Gourd",
    image: gowravBottle,
    short: "F1 bottle gourd with uniform, glossy long fruits.",
  },
  {
    id: "amaran-chilli",
    name: "Amaran F1 Hybrid Chilli",
    category: "Chilli",
    image: amaranChilli,
    short:
      "Semi-wrinkled, dark green to glossy red chilli with intermediate resistance to Chilli Leaf Curl Virus. Early-maturing, semi-erect, vigorous plant — ideal for both fresh green market and dry red processing.",
    details: [
      "Fruit: Semi-wrinkled, dark green → glossy red, avg 9–11 cm",
      "Disease Resistance: IR to Chilli Leaf Curl Virus",
      "Plant: Semi-erect, vigorous, strong",
      "Picking: Early maturity",
      "Best for: Fresh green market & dry red processing",
    ],
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
