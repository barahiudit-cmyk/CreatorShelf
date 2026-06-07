import { BarChart2 } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export interface PlatformTab {
  id: string;
  name: string;
  subtitle: string;
  icon?: React.ElementType;
  bg: string;
  active?: boolean;
}

export const platformTabs: PlatformTab[] = [
  {
    id: "overview",
    name: "Overview",
    subtitle: "All Platforms",
    icon: BarChart2,
    bg: "var(--portfolio-purple)",
    active: true,
  },
  {
    id: "youtube",
    name: "YouTube",
    subtitle: "@alexcreates",
    icon: FaYoutube,
    bg: "#FF0000",
  },
  {
    id: "instagram",
    name: "Instagram",
    subtitle: "@alexcreates_ig",
    icon: FaInstagram,
    bg: "linear-gradient(45deg,#f09433,#bc1888)",
  },
];

export const MAIN_CHART_DATA = [
  {
    date: "Apr 23",
    total: 60000,
    youtube: 45000,
    insta: 20000,
  },
  {
    date: "Apr 30",
    total: 75000,
    youtube: 55000,
    insta: 28000,
  },
  {
    date: "May 7",
    total: 98600,
    youtube: 58100,
    insta: 40500,
  },
  {
    date: "May 14",
    total: 110000,
    youtube: 68000,
    insta: 48000,
  },
  {
    date: "May 21",
    total: 125400,
    youtube: 74300,
    insta: 51100,
  },
];

export const SPARKLINE_DATA = [
  { v: 10 },
  { v: 15 },
  { v: 12 },
  { v: 18 },
  { v: 14 },
  { v: 22 },
  { v: 20 },
];

export const TOP_CONTENT = [
  {
    title: "Laravel 11 Full Course (2024)",
    date: "May 18, 2024",
    views: "24.5K",
    engagement: "3.2K",
    rate: "13.1%",
  },
  {
    title: "Sunset views from the mountains ⛰️",
    date: "May 16, 2024",
    views: "12.3K",
    engagement: "1.8K",
    rate: "14.6%",
  },
  {
    title: "JavaScript Tutorial (2024)",
    date: "May 10, 2024",
    views: "18.7K",
    engagement: "2.1K",
    rate: "11.2%",
  },
];

export const TOP_COUNTRIES = [
  {
    name: "India",
    value: "38.6%",
  },
  {
    name: "United States",
    value: "24.7%",
  },
  {
    name: "Indonesia",
    value: "8.9%",
  },
  {
    name: "Brazil",
    value: "6.4%",
  },
];

export const AGE_DISTRIBUTION = [
  {
    name: "18-24",
    value: 46,
    color: "#7c3aed",
  },
  {
    name: "25-34",
    value: 35,
    color: "#ed4c37",
  },
  {
    name: "35-44",
    value: 12,
    color: "#f59e0b",
  },
  {
    name: "45+",
    value: 7,
    color: "#3b82f6",
  },
];