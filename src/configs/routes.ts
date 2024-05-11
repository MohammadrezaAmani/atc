import { langs as languages } from "./langs";

export const routes = {
  home: {
    path: "/",
    langs: [
      {
        lang: languages.en.short,
        title: "Home",
        description: "AmirKabir Trade Challenge's website",
      },
      {
        lang: languages.fa.short,
        title: "صفحه‌ی اصلی",
        description: "صفحه اصلی مسابقات ترید امیرکبیر",
      },
    ],
  },
  prizes: {
    path: "/prizes",
    langs: [
      {
        lang: languages.en.short,
        title: "Prizes",
        description: "Prizes of AmirKabir Trade Challenge",
      },
      {
        lang: languages.fa.short,
        title: "جوایز",
        description: "جوایز مسابقات ترید امیرکبیر",
      },
    ],
  },
  faq: {
    path: "/faq",
    langs: [
      {
        lang: languages.en.short,
        title: "FAQ",
        description:
          "frequently asked questions about AmirKabir Trade Challenge",
      },
      {
        lang: languages.fa.short,
        title: "سوالات پرتکرار",
        description: "سوالات پرتکرار درباره مسابقات ترید امیرکبیر",
      },
    ],
  },
  login: {
    path: "/login",
    langs: [
      {
        lang: languages.en.short,
        title: "login",
        description: "Login to AmirKabir Trade Challenge's website",
      },
      {
        lang: languages.fa.short,
        title: "ورود",
        description: "ورود به مسابقات ترید امیرکبیر",
      },
    ],
  },
  signup: {
    path: "/signup",
    langs: [
      {
        lang: languages.en.short,
        title: "SignUp",
        description: "Register in AmirKabir Trade Challenge",
      },
      {
        lang: languages.fa.short,
        title: "ثبت نام",
        description: "ثبت نام در مسابقات ترید امیرکبیر",
      },
    ],
  },
  notFound: {
    langs: [
      {
        lang: languages.en.short,
        title: "Not Found",
        description: "Page not found",
      },
      {
        lang: languages.fa.short,
        title: "پیدا نشد",
        description: "صفحه پیدا نشد",
      },
    ],
  },
  about: {
    path: "/about",
    langs: [
      {
        lang: languages.en.short,
        title: "About ATC",
        description: "About AmirKabir Trade Challenge",
      },
      {
        lang: languages.fa.short,
        title: "درباره‌ی ما",
        description: "درباره مسابقات ترید امیرکبیر",
      },
    ],
  },
};
