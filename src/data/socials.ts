import { Github, Instagram, Linkedin, Music2 } from "lucide-react";
import type { SocialLink } from "../types";

export const socials: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "@sakti-selginov-3b364a343",
    url: "https://www.linkedin.com/in/sakti-selginov-3b364a343",
    icon: Linkedin,
  },
  {
    platform: "Instagram",
    username: "@sakti_xaf",
    url: "https://www.instagram.com/sakti_xaf",
    icon: Instagram,
  },
  {
    platform: "TikTok",
    username: "@s_maximilian",
    url: "https://www.tiktok.com/@s_maximilian?lang=en",
    icon: Music2,
  },
  {
    platform: "GitHub",
    username: "@SaktiXaf",
    url: "https://github.com/SaktiXaf?tab=repositories",
    icon: Github,
  },
];
