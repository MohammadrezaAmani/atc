import { routes } from "./routes";
import { langs } from "./langs";
import { TbHeartCode } from "react-icons/tb";
import { FaFireAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbMessageQuestion } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";

export const BaseUri = "";

export const siteConfig = {
  langs: [
    {
      langs: langs.en.short,
      title: "ATC Challenge",
      description: "AmirKabir Trade Challenge's website",
      author: "Mohammadreza Amani",
    },
    {
      lang: langs.fa.short,
      title: "مسابقات ترید امیرکبیر",
      description: "وبسایت مسابقات ترید امیرکبیر",
      author: "محمدرضا امانی",
    },
  ],
  url: "https://MohammadrezaAmani.github.io/",
  email: "more.amani@yahoo.com",
  github: "https://github.com/MohammadrezaAmani",
  theme: "dark",
};

export function getMenuItems(lang: string) {
  const findTitle = (key: string) => {
    const keylang = routes[key as keyof typeof routes].langs.find(
      (item) => item.lang === lang
    );
    if (!keylang) {
      return routes[key as keyof typeof routes].langs[0].title;
    }
    return keylang.title;
  };
  return [
    {
      text: findTitle("about"),
      slug: BaseUri + routes.about.path,
      icon: BiMessageSquareDetail,
    },
    {
      text: findTitle("prizes"),
      slug: BaseUri + routes.prizes.path,
      icon: CiTrophy,
    },
    {
      text: findTitle("faq"),
      slug: BaseUri + routes.faq.path,
      icon: TbMessageQuestion,
    },
    {
      text: findTitle("login"),
      slug: BaseUri + routes.login.path,
      icon: CiLogin,
    },
    {
      text: findTitle("signup"),
      slug: BaseUri + routes.signup.path,
      icon: FaFireAlt,
    },
  ];
}

export const homePage = [
  {
    lang: langs.en.short,
    title: (
      <h2 className="text-4xl">
        Hi, I’m <span className="text-red-600">ATC</span>
      </h2>
    ),
    subtitle: (
      <p className="text-slate-600">The biggest Cryto Challenge in Iran</p>
    ),
    skills: [
      {
        title: "Code And Fun",
        icon: TbHeartCode,
        url: "https://github.com/MohammadrezaAmani",
      },
      {
        title: "Tehran, Iran",
        icon: CiLocationOn,
        url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
      },
    ],
    cvButton: "Login Now",
    contactButton: "Winners",
  },
  {
    lang: langs.fa.short,
    title: (
      <h2 className="text-4xl">
        {" "}
        مسابقات بزرگ <span className="text-red-600">ATC</span>
      </h2>
    ),
    subtitle: <p className="text-slate-600">یک مسابقه ساده با کلی جایزه!</p>,
    skills: [
      {
        title: "برنامه نویسی و خنده",
        icon: TbHeartCode,
        url: "https://github.com/MohammadrezaAmani",
      },
      {
        title: "تهران، ایران",
        icon: CiLocationOn,
        url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
      },
    ],
    cvButton: "ثبت نام",
    contactButton: "برندگان",
  },
];

export const social = [
  {
    name: "telegram",
    url: "https://t.me/Mohammadreza_amani",
    icon: PiTelegramLogoThin,
    value: "Mohammadreza_amani",
  },
];
