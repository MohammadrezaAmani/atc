import { routes } from "./routes";
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
  title: "ATChallenge",
  description: "وبسایت مسابقات ترید امیرکبیر",
  author: "محمدرضا امانی",
  url: "https://MohammadrezaAmani.github.io/",
  email: "more.amani@yahoo.com",
  github: "https://github.com/MohammadrezaAmani",
  theme: "dark",
};

export const menuItems = [
  {
    text: routes.about.title,
    slug: BaseUri + routes.about.path,
    icon: BiMessageSquareDetail,
  },
  {
    text: routes.prizes.title,
    slug: BaseUri + routes.prizes.path,
    icon: CiTrophy,
  },
  {
    text: routes.faq.title,
    slug: BaseUri + routes.faq.path,
    icon: TbMessageQuestion,
  },
  {
    text: routes.login.title,
    slug: BaseUri + routes.login.path,
    icon: CiLogin,
  },
  {
    text: routes.signup.title,
    slug: BaseUri + routes.signup.path,
    icon: FaFireAlt,
  },
];


export const homePage = {
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
}

export const social = [
  {
    name: "telegram",
    url: "https://t.me/Mohammadreza_amani",
    icon: PiTelegramLogoThin,
    value: "Mohammadreza_amani",
  },
];
