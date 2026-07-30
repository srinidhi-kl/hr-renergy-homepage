import {
  Sun,
  Droplets,
  Thermometer,
  BatteryCharging,
  Waves,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const products: Product[] = [
  {
    id: "solar-power-plants",
    name: "Solar Power Plants",
    description:
      "Rooftop on-grid, off-grid and hybrid systems engineered to cut your electricity bill from day one.",
    icon: Sun,
  },
  {
    id: "solar-water-heaters",
    name: "Solar Water Heaters",
    description:
      "ETC and FPC water heating systems that deliver hot water round the year with near-zero running cost.",
    icon: Droplets,
  },
  {
    id: "heat-pump-solutions",
    name: "Heat Pump Solutions",
    description:
      "High-efficiency domestic and commercial heat pumps for consistent hot water in any weather.",
    icon: Thermometer,
  },
  {
    id: "batteries-ups",
    name: "Batteries & UPS",
    description:
      "Lithium and tubular battery banks with inverters and UPS for reliable backup during outages.",
    icon: BatteryCharging,
  },
  {
    id: "water-softeners",
    name: "Domestic Water Softeners",
    description:
      "Automatic and manual softeners that protect your plumbing, appliances, skin and hair from hard water.",
    icon: Waves,
  },
  {
    id: "servo-stabilizers",
    name: "Servo Stabilizers",
    description:
      "Servo-controlled voltage stabilizers that keep sensitive equipment safe from fluctuating supply.",
    icon: Gauge,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const company = {
  name: "HR Renergy",
  phone: "+91 98765 43210",
  email: "info@hrrenergy.in",
  address: "No. 42, Green Energy Park, Hosur Road, Bengaluru, Karnataka 560068",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
};
