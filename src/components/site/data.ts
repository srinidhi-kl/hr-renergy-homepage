import {
  Sun,
  Droplets,
  Thermometer,
  BatteryCharging,
  Waves,
  Gauge,
  type LucideIcon,
} from "lucide-react";

import solarPlantImg from "@/assets/prod-solar-plant.jpg";
import waterHeaterImg from "@/assets/prod-water-heater.jpg";
import heatPumpImg from "@/assets/prod-heatpump.jpg";
import batteryImg from "@/assets/prod-battery.jpg";
import softenerImg from "@/assets/prod-softener.jpg";
import stabilizerImg from "@/assets/prod-stabilizer.jpg";
import projectIndustrialImg from "@/assets/project-industrial.jpg";
import projectWaterHeaterImg from "@/assets/project-water-heater.jpg";
import projectHeatpumpImg from "@/assets/project-heatpump.jpg";
import heroFarmImg from "@/assets/hero-farm.jpg";

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
    tag: "Flagship",
  },
  {
    id: "solar-water-heaters",
    name: "Solar Water Heaters",
    description:
      "ETC and FPC systems delivering hot water round the year at near-zero running cost.",
    icon: Droplets,
    image: waterHeaterImg,
    tag: "Hot water",
  },
  {
    id: "heat-pump-solutions",
    name: "Heat Pump Solutions",
    description:
      "High-efficiency domestic and commercial heat pumps for consistent hot water in any weather.",
    icon: Thermometer,
    image: heatPumpImg,
    tag: "All-weather",
  },
  {
    id: "batteries-ups",
    name: "Batteries & UPS",
    description:
      "Lithium and tubular battery banks with inverters for reliable backup during outages.",
    icon: BatteryCharging,
    image: batteryImg,
    tag: "Backup",
  },
  {
    id: "water-softeners",
    name: "Domestic Water Softeners",
    description:
      "Automatic softeners that protect plumbing, appliances, skin and hair from hard water.",
    icon: Waves,
    image: softenerImg,
    tag: "Water care",
  },
  {
    id: "servo-stabilizers",
    name: "Servo Stabilizers",
    description:
      "Servo-controlled stabilizers that keep sensitive equipment safe from fluctuating supply.",
    icon: Gauge,
    image: stabilizerImg,
    tag: "Protection",
  },
];

export const heroImage = heroFarmImg;

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

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
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
