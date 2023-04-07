import { NavItem as MainNavItem, SidebarNavItem } from "@/types/nav"

interface ChatConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const chatConfig: ChatConfig = {
  mainNav: [
    {
      title: "Chats",
      href: "/chats",
    },
  ],
  sidebarNav: [
    {
      title: "Chats",
      items: [
        {
          title: "Accordion",
          href: "/docs/primitives/accordion",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/primitives/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/primitives/avatar",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/primitives/button",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/primitives/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/primitives/collapsible",
          items: [],
        },
        {
          title: "Command",
          href: "/docs/primitives/command",
          label: "Beta",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/primitives/context-menu",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/primitives/dialog",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/primitives/dropdown-menu",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/primitives/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/primitives/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/primitives/menubar",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/docs/primitives/navigation-menu",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/primitives/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/primitives/radio-group",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/primitives/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/primitives/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/primitives/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/primitives/sheet",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/primitives/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/primitives/switch",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/primitives/textarea",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/primitives/toggle",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/primitives/toast",
          label: "New",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          items: [],
        },
      ],
    },
  ],
}