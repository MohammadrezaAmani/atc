import React from "react";
import { commonArgs } from "../../configs/types";
import data, { contact_type } from "../../configs/about/data";

interface ContactWayProps {
  way: contact_type;
}

const ContactWay: React.FC<ContactWayProps> = ({ way }) => (
  <a
    href={way.url}
    className={`contact-way flex bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg items-center px-4 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2`}
    target="_blank"
    rel="noreferrer"
  >
    <way.icon className="contact-icon w-6 h-6 text-gray-600" />
    <span className="contact-text text-sm text-gray-700 dark:text-white">
      {way.content}
    </span>
  </a>
);

const About: React.FC<commonArgs> = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0 text-center sm:w-6/12 w-11/12 h-screen flex flex-col justify-center">
      <div className="about-content">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          درباره‌ی ما
        </h2>
        <p className="text-gray-700 dark:text-gray-300 prose mb-6">
          معاملات الگوریتمی نوعی رویکرد در بازارهای مالی است که توسط ماشین‌ها و
          با دستورات از پیش تعیین شده انجام می‌شود، به جای دخالت عامل انسانی. هر
          چه دخالت انسانی کمتر باشد، معاملات نزدیک‌تر به الگوریتمی خواهند بود.
          با توسعه یادگیری ماشینی در سال‌های اخیر، ابزارهای هوشمندی ساخته
          شده‌اند که می‌توانند به جای انسان فکر کنند و در بسیاری از موارد،
          عملکرد بهتری نسبت به انسان داشته باشند. این ابزارها به‌طور گسترده در
          حوزه مالی نیز استفاده می‌شوند. مسابقه{" "}
          <span className="text-red-500">ATC</span> یک چالش جدی در حوزه معاملات
          الگوریتمی است که شرکت‌کنندگان باید استراتژی‌های معاملاتی خود را
          پیاده‌سازی کرده و در نهایت در سه شاخص با یکدیگر رقابت کنند. این مسابقه
          با استفاده از زبان برنامه‌نویسی پایتون برگزار می‌شود که به دلیل سادگی
          و غنی بودن کتابخانه‌ها، انتخاب مناسبی است.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.contact_ways.ways.map((way, index) => (
            <ContactWay key={index} way={way} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
