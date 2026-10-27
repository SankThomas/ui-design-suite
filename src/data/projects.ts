import type { Project } from "../types/project";

export const filters = [
  "All projects",
  "React",
  "Vite",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
];

export const projects: Project[] = [
  {
    title: "About Card",
    slug: "about-card",
    image: "/about-card.png",
    description:
      "A profile card component designed to present personal information in a clean, visually engaging layout. It provides a compact space for introducing a person, highlighting key details, and creating a polished profile preview that can be reused across websites and dashboards.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/about-card",
    youtubeVideo: "https://www.youtube.com/watch?v=0_rkDl9NtjI",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "App Dashboard",
    slug: "app-dashboard",
    image: "/app-dashboard.png",
    description:
      "A modern application dashboard that organizes important information and interface controls into a cohesive workspace. Its structured layout demonstrates how navigation, summary sections, and reusable UI elements can come together to create an intuitive starting point for a web application.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/app-dashboard",
    youtubeVideo: "https://www.youtube.com/watch?v=FRlBsA7DTCU",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Apps Website",
    slug: "apps-website",
    image: "/apps-website.png",
    description:
      "A website interface for presenting applications in an organized and accessible way. It focuses on clear content hierarchy, consistent application cards, and a polished browsing experience, making it a useful reference for building product directories and app discovery pages.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/apps-website",
    youtubeVideo: "https://www.youtube.com/watch?v=ef0dNqFz6qk",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Billing Page",
    slug: "billing-page",
    image: "/billing-page.png",
    description:
      "A billing interface for presenting account charges, payment information, and subscription-related details in a structured layout. The design demonstrates how financial information can be organized into readable sections, helping users understand their billing status and navigate account payment settings.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/billing-page",
    youtubeVideo: "https://www.youtube.com/watch?v=uRWlGmcfpgw",
    tech: ["HTML", "CSS", "TailwindCSS", "Font Awesome"],
  },
  {
    title: "Buy Subscription Modal",
    slug: "buy-subscription-modal",
    image: "/buy-subscription-modal.png",
    description:
      "A subscription purchase modal that presents a plan or upgrade option within a focused dialog. It demonstrates how pricing information, plan details, and clear calls to action can be arranged to help users review an offer before proceeding with a subscription.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/buy-subscription-modal",
    youtubeVideo: "https://www.youtube.com/watch?v=4yZSVIOmZ98",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Cancel Plan Modal",
    slug: "cancel-plan-modal",
    image: "/cancel-plan-modal.png",
    description:
      "A subscription cancellation dialog designed to communicate the consequences of ending a plan before the user confirms their decision. It demonstrates how clear messaging, cancellation actions, and an alternative to staying subscribed can be presented without overwhelming the user.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/cancel-plan-modal",
    youtubeVideo: "https://www.youtube.com/watch?v=g5p981j1mCk",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Photo Collections List",
    slug: "photo-collections-list",
    image: "/collections-list.png",
    description:
      "A photo collection interface for organizing groups of images into an easy-to-scan list. The layout emphasizes visual previews, collection details, and consistent spacing, making it suitable as a UI reference for photo galleries, creative portfolios, and media management applications.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/collections-list",
    youtubeVideo: "https://www.youtube.com/watch?v=P1XuglmZ6kw",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Contraction Timer",
    slug: "contraction-timer",
    image: "/contraction-timer.png",
    description:
      "A contraction tracking interface designed to help users record contraction durations and intervals in one place. Its timer-focused layout demonstrates how elapsed time, session information, and essential controls can be presented clearly in a simple utility interface.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/contraction-timer",
    youtubeVideo: "https://www.youtube.com/watch?v=sfQjnVi2Xj4",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Cookie Preferences Modal",
    slug: "cookie-preferences-modal",
    image: "/cookie-preference-modal.png",
    description:
      "A cookie preferences dialog that gives users a dedicated interface for reviewing and managing cookie settings. It provides a design reference for presenting privacy choices, explaining preference categories, and offering clear controls for saving or updating consent.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/cookie-preference-modal",
    youtubeVideo: "https://www.youtube.com/watch?v=XWdQfuVIEK0",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Date Picker",
    slug: "date-picker",
    image: "/date-picker.png",
    description:
      "A date selection component that provides a calendar-based interface for choosing dates. It demonstrates how calendar navigation, date indicators, and selection states can be arranged into a compact input experience suitable for booking forms, scheduling tools, and date-driven applications.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/date-picker",
    youtubeVideo: "https://www.youtube.com/watch?v=Gc8PcEf9pkw",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Details Card",
    slug: "details-card",
    image: "/details-card.png",
    description:
      "A reusable information card that presents the important details of an item in a clear, structured format. Its focused layout demonstrates how labels, descriptive content, and supporting visual elements can be combined to make information easier to scan and understand.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/details-card",
    youtubeVideo: "https://www.youtube.com/watch?v=LI_Trs0fXjM",
    tech: ["React", "Vite", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Login Form with the DummyJSON API",
    slug: "login-form-with-the-dummyjson-api",
    image: "/enter-password.png",
    description:
      "A password entry interface focused on presenting a clear authentication step. It provides a UI reference for password fields, form guidance, and submission controls, with an emphasis on a straightforward experience that can be adapted for sign-in and account verification flows.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/enter-password",
    youtubeVideo: "https://www.youtube.com/watch?v=pFNZjoWcQhA",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Event Card",
    slug: "event-card",
    image: "/event-card.png",
    description:
      "An event presentation card designed to communicate essential event information at a glance. Its layout can accommodate an event title, date, location, and supporting details, making it a useful building block for event directories, community platforms, and scheduling interfaces.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/event-card",
    youtubeVideo: "https://www.youtube.com/watch?v=ozTfYWZFcR4",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Filter Card",
    slug: "filter-card",
    image: "/filter-card.png",
    description:
      "A filter interface that groups related selection controls into a compact, organized panel. It demonstrates how filtering options can be presented in a clear visual hierarchy, helping users narrow down results and refine the content displayed in a product listing or data-driven application.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/filter-card",
    youtubeVideo: "https://www.youtube.com/watch?v=IeCdq6wQ3kM",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Inbox UI",
    slug: "inbox-ui",
    image: "/inbox-ui.png",
    description:
      "An inbox interface for organizing and browsing messages in a familiar email-style layout. It provides a UI reference for message lists, sender information, subject previews, and message status indicators, with an emphasis on readability and efficient navigation through incoming communication.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/inbox-ui",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Job Cards",
    slug: "job-cards",
    image: "/job-cards.png",
    description:
      "A collection of job listing cards designed to present employment opportunities in a consistent, scannable format. The interface can highlight job titles, company information, work arrangements, and other key attributes, providing a useful foundation for recruitment platforms and job boards.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/job-cards",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Landing Page",
    slug: "landing-page",
    image: "/landing-page.png",
    description:
      "A landing page interface built to introduce a product or service through a clear visual hierarchy and focused messaging. It demonstrates how introductory content, supporting sections, and prominent calls to action can work together to communicate a value proposition and guide visitors toward the next step.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/landing-page",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Menu UI",
    slug: "menu-ui",
    image: "/menu-ui.png",
    description:
      "A menu interface component for organizing navigation links or available actions into a structured, easy-to-scan layout. It serves as a reference for building consistent menus that help users discover destinations and interact with the different sections of a website or application.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/menu-ui",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Notifications UI",
    slug: "notifications-ui",
    image: "/notifications-ui.png",
    description:
      "A notification interface for presenting updates, alerts, and activity messages in an organized layout. It demonstrates how notification content, status indicators, and supporting metadata can be displayed in a way that helps users identify relevant updates without losing sight of the main application.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/notifications-ui",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Page Header",
    slug: "page-header",
    image: "/page-header.png",
    description:
      "A reusable page header that establishes context at the top of an application view. It provides a design reference for arranging page titles, supporting descriptions, navigation context, and optional actions into a consistent header that can be reused across multiple screens.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/page-header",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Payment Method",
    slug: "payment-method",
    image: "/payment-method.png",
    description:
      "A payment method interface for displaying or selecting payment information within a checkout or account billing flow. Its design focuses on presenting payment options and relevant details in a clear, organized format that can be adapted for subscription management and online purchasing experiences.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/payment-method",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "People List",
    slug: "people-list",
    image: "/people-list.png",
    description:
      "A people directory component for displaying individuals in a structured, easy-to-browse list. It provides a reusable layout for presenting names, profile images, and supporting information, making it suitable as a starting point for team directories, contact lists, and member management screens.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/people-list",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Pricing Card",
    slug: "pricing-card",
    image: "/pricing-card.png",
    description:
      "A pricing card that presents a product or service plan alongside its price, included features, and a clear call to action. The component demonstrates how pricing information can be organized to help visitors understand an offering and evaluate the features associated with a particular plan.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/pricing-card",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Product Review Modal",
    slug: "product-review-modal",
    image: "/product-review-modal.png",
    description:
      "A product review dialog designed to give users a focused space to share feedback about an item. It provides a UI reference for arranging review text, rating controls, and submission actions into a clear form that can be adapted for e-commerce and product feedback experiences.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/product-review-modal",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Recipe Components",
    slug: "recipe-components",
    image: "/recipe-components.png",
    description:
      "A collection of recipe-focused UI components for presenting food content in an organized and visually engaging format. The components offer a starting point for displaying recipe information and related content in cooking websites, recipe discovery platforms, and food-oriented applications.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/recipe-components",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Users List",
    slug: "users-list",
    image: "/users-list.png",
    description:
      "A user listing interface for presenting account or profile information in a consistent, scannable layout. It provides a foundation for administrative dashboards and user management screens where people need to browse user records and quickly identify relevant account details.",
    githubRepo:
      "https://github.com/sankthomas/ui-design-components/tree/main/users-list",
    youtubeVideo: "",
    tech: ["React", "Vite", "TailwindCSS"],
  },
];
