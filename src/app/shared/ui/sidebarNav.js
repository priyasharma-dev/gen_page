import {
  Home,
  MessageSquare,
  Compass,
  GraduationCap,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    path: "/",
    match: ["/"],
    icon: Home,
  },
  {
    name: "Chats",
    path: "/chat/new",
    match: ["/chat"],
    icon: MessageSquare,
  },
  {
    name: "Discover",
    path: "/discover",
    match: ["/discover"],
    icon: Compass,
  },
  {
    name: "Training Center",
    path: "/training",
    match: ["/training"],
    icon: GraduationCap,
  },
];
