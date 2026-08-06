import {
  Sun,
  Droplets,
  Thermometer,
  BatteryCharging,
  Waves,
  Lightbulb,
  Wind,
  type LucideIcon,
} from "lucide-react";

import solarPlantImg from "@/assets/prod-solar-plant.jpg";
import waterHeaterImg from "@/assets/prod-water-heater.jpg";
import heatPumpImg from "@/assets/prod-heatpump.jpg";
import batteryImg from "@/assets/prod-battery.jpg";
import softenerImg from "@/assets/prod-softener.jpg";
import streetLightImg from "@/assets/prod-street-light.jpg";
import waterPumpImg from "@/assets/prod-water-pump.jpg";
import projectIndustrialImg from "@/assets/project-industrial.jpg";
import projectWaterHeaterImg from "@/assets/project-water-heater.jpg";
import projectHeatpumpImg from "@/assets/project-heatpump.jpg";
import heroBrightImg from "@/assets/hero-bright.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tag: string;
};

export const products: Product[] = [
  {
    id: "solar-power-plants",
    name: "Solar Power Plants",
    description:
      "Rooftop on-grid, off-grid and hybrid systems engineered to cut your electricity bill from day one.",
    icon: Sun,
    image: solarPlantImg,
    tag: "Power",
  },
  {
    id: "solar-water-heaters",
    name: "Solar Water Heaters",
    description:
      "ETC and FPC systems delivering hot water round the year at near-zero running cost.",
    icon: Droplets,
    image: waterHeaterImg,
    tag: "Water",
  },
  {
    id: "heat-pump-solutions",
    name: "Heat Pump Solutions",
    description:
      "High-efficiency domestic and commercial heat pumps for consistent hot water in any weather.",
    icon: Thermometer,
    image: heatPumpImg,
    tag: "Water",
  },
  {
    id: "batteries-ups",
    name: "Batteries & UPS",
    description:
      "Lithium and tubular battery banks with inverters for reliable backup during outages.",
    icon: BatteryCharging,
    image: batteryImg,
    tag: "Power",
  },
  {
    id: "water-softeners",
    name: "Domestic Water Softeners",
    description:
      "Automatic softeners that protect plumbing, appliances, skin and hair from hard water.",
    icon: Waves,
    image: softenerImg,
    tag: "Water",
  },
  {
    id: "solar-street-light",
    name: "Solar Street Light",
    description:
      "All-in-one solar LED street lighting with dusk-to-dawn automation for roads, campuses and farms.",
    icon: Lightbulb,
    image: streetLightImg,
    tag: "Power",
  },
  {
    id: "solar-water-pumping",
    name: "Solar Water Pumping",
    description:
      "Surface and submersible solar pump sets that run irrigation and overhead tanks without diesel.",
    icon: Wind,
    image: waterPumpImg,
    tag: "Water",
  },
];

export const heroImage = heroBrightImg;

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  result: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "180 kWp Industrial Rooftop",
    location: "Hosur, Tamil Nadu",
    category: "Solar Power Plant",
    result: "₹22L saved annually",
    image: projectIndustrialImg,
  },
  {
    id: "p2",
    title: "Apartment Solar Water Heating",
    location: "Whitefield, Bengaluru",
    category: "Solar Water Heater",
    result: "120 flats, 24×7 hot water",
    image: projectWaterHeaterImg,
  },
  {
    id: "p3",
    title: "Hotel Heat Pump Retrofit",
    location: "Mysuru, Karnataka",
    category: "Heat Pump",
    result: "68% lower heating cost",
    image: projectHeatpumpImg,
  },
  {
    id: "p4",
    title: "Villa Hybrid Solar + Storage",
    location: "Sarjapur, Bengaluru",
    category: "Hybrid System",
    result: "Zero-outage living",
    image: solarPlantImg,
  },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Power",
    href: "#solutions",
    children: [
      { label: "Solar Power Plants", href: "#solutions" },
      { label: "Batteries & UPS", href: "#solutions" },
      { label: "Solar Street Light", href: "#solutions" },
    ],
  },
  {
    label: "Water",
    href: "#solutions",
    children: [
      { label: "Solar Water Heaters", href: "#solutions" },
      { label: "Heat Pump Solutions", href: "#solutions" },
      { label: "Domestic Water Softeners", href: "#solutions" },
      { label: "Solar Water Pumping", href: "#solutions" },
    ],
  },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const company = {
  name: "HR Renergy",
  phone: "+91 98765 43210",
  email: "info@hrrenergy.in",
  address: "No. 42, Green Energy Park, Hosur Road, Bengaluru, Karnataka 560068",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
};
