import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0 text-center sm:w-6/12 w-11/12 h-screen flex justify-center flex-col">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        جوایز
      </h2>
      <p className="text-gray-700 dark:text-gray-300 prose mb-6">
        این مسابقه در ۳ لیگ برگزار می‌شود که جمعا دارای یک میلیارد ریال جوایز
        نقدی و بیش از پانصد میلیون ریال هدایای ارزنده می‌باشد. <br />
        این مسابقه هر لیگ دارای سه برنده خواهد بود که بعد از اتمام مسابقه و
        تصحیح،‌ رتبه‌‌بندی می‌شوند و به نفرات اول تا سوم هر لیگ به ترتیب جوایز
        زیر تعلق می‌گیرد. •
      </p>
      <br />
      <br />
      <br />
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="border px-4 py-2">نفر اول</td>
            <td className="border px-4 py-2">۱۵۰،۰۰۰،۰۰۰ ریال</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">نفر دوم</td>
            <td className="border px-4 py-2">۱۰۰،۰۰۰،۰۰۰ ریال</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">نفر سوم</td>
            <td className="border px-4 py-2">۵۰،۰۰۰،۰۰۰ ریال</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
