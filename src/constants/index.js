import {
  chartaverage,
  creditcard,
  deleteicon,
  dollarcircle,
  home,
  presentationchart,
  settings,
  share,
  star,
  updates,
} from "../assets";

export const navItems = [
  { icon: home, text: "Home", href: "#" },
  { icon: presentationchart, text: "Activity", href: "#" },
  { icon: star, text: "Favourites", href: "#" },
  { icon: deleteicon, text: "Recycle Bin", href: "#" },
  { icon: updates, text: "Updates", href: "#" },
  { icon: share, text: "Share", href: "#" },
  { icon: settings, text: "Settings", href: "#" },
];

export const statCards = [
  {
    icon: creditcard,
    title: "Wallet",
  },
  {
    icon: creditcard,
    title: "Wallet",
  },
  {
    icon: dollarcircle,
    title: "Income",
  },
  {
    icon: chartaverage,
    title: "Leveling",
  },
];

export const tabs = ["Nov 20", "Dec 20", "Jan 20", "Feb 20", "March 20"];

export const gridData = [
  { label: "Inflow", amount: "$1,806", imageClass: "" },
  { label: "Outflow", amount: "$2,743", imageClass: "rotate-180" },
  { label: "Net Changes", amount: "$2,743", imageClass: "rotate-180" },
];

export const notifications = [
  { id: 1, message: "Notification 1" },
  { id: 2, message: "Notification 2" },
  { id: 3, message: "Notification 3" },
  { id: 4, message: "Notification 4" },
  { id: 5, message: "Notification 5" },
  { id: 6, message: "Notification 6" },
];

export const messagesList = [
  { id: 1, text: "Message 1" },
  { id: 2, text: "Message 2" },
  { id: 3, text: "Message 3" },
  { id: 4, text: "Message 4" },
  { id: 5, text: "Message 5" },
  { id: 6, text: "Message 6" },
];

export const menuItems = [
  { id: 1, label: "Dashboard", link: "#" },
  { id: 2, label: "Settings", link: "#" },
  { id: 3, label: "Earnings", link: "#" },
  { id: 4, label: "Log out", link: "#" },
];

export const linechartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];
