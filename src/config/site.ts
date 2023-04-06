import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "PaperChat",
  description: "Chat with PDFs and other documents in real time.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Chats",
      href: "/chats",
    },
  ],
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7/paper-chat",
  },
}
