import { sponsors } from "../configs/site";
import winner from "../assets/winner.png";
import poster from "../assets/ATC-Web.jpg";

const boxStyle =
  "rounded-lg sm:shadow-xl shadow-lg bg-gradient-to-tl from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-800 transform hover:-translate-y-0.5 transition duration-400 ease-in-out md:hover:shadow-2xl hover:shadow-xl";

export default function HomePage() {
  return (
    <div className="relative dark:text-white text-center">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mt-12">
          <div
            className={`flex flex-col sm:flex-row mt-4 justify-between flex-wrap p-10 w-11/12 sm:w-7/12`}
          >
            <p className="text-gray-600 dark:text-gray-300">
              <b className="text-gray-900 dark:text-white text-3xl">
                مسابقه الگوریتم تریدینگ امیرکبیر
              </b>
              <br />
              <br />
              مسابقه الگوریتم تریدینگ امیرکبیر اولین رویداد با موضوع پیش‌بینی
              بازارهای سرمایه در ایران است. این موضوع یک چالش جدی در حوزه
              معاملات الگوریتمی است. شرکت‌کنندگان در این مسابقه باید
              استراتژی‌های معاملاتی خود را پیاده‌سازی و با کمک داده های داده شده
              به مسابقه بگذارند.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12">
            <div className="flex items-center flex-col">
              <div className="flex flex-col sm:flex-row mt-4 justify-between flex-wrap">
                <p className="text-gray-600 dark:text-gray-300 sm:w-3/5">
                  <b className="text-gray-900 dark:text-white">لیگ‌ها</b>
                  <br />
                  لیگ‌های مسابقه بر اساس شاخص‌های زیر، که از جمله شاخص‌های مهم
                  در ارزیابی کیفیت استراتژی‌های معاملاتی استفاده هستند، برگزار
                  می شوند. شرکت‌کنندگان ابتدا انتخاب می‌کنند که می خواهند در
                  کدام یک از شاخص‌ها با رقبای خود رقابت کنند. شاخص‌ها به گونه‌ای
                  انتخاب شده اند که همپوشانی کمی داشته باشند. لیگ‌های مسابقه که
                  بر اساس شاخص‌های مطرح در سنجش کیفیت استراتژی‌های معاملاتی
                  انتخاب شده اند، به شرح زیر هستند:
                </p>
                <img
                  src={winner}
                  alt="winner"
                  className="sm:w-2/5 h-auto hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex p-10 sm:p-8 justify-center flex-row items-center w-11/12 sm:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-2 rounded-md p-5">
              <div className="border-2 rounded-md shadow-emerald-100 dark:shadow-emerald-900 shadow-lg p-4 m-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <b className="text-gray-900 dark:text-white">لیگ بازدهی</b>
                  <br />
                  این لیگ بر اساس عملکرد نهایی استراتژی، به عنوان بازدهی نهایی،
                  تشکیل می‌شود. این شاخص نشان می‌دهد که یک استراتژی چقدر سودآور
                  است، به عبارت دیگر، درصد سود کل نسبت به سرمایه‌گذاری اولیه را
                  نمایش می‌دهد. برای ارزیابی دقیق‌تر، این بازدهی ممکن است به سود
                  بای-اند-هلد تقسیم شود تا میزان ریسک مدیریت شده نیز مدنظر قرار
                  گیرد.
                </p>
              </div>
              <div className="border-2 rounded-md shadow-emerald-100 dark:shadow-emerald-900 shadow-lg p-4 m-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <b className="text-gray-900 dark:text-white">لیگ شارپ</b>
                  <br />
                  این شاخص بر اساس نسبت بازدهی به ریسک، به عنوان کیفیت تریدها،
                  تعریف می‌شود. با استفاده از امید سود و انحراف معیار سود، این
                  شاخص نشان می‌دهد که استراتژی چقدر بازدهی داشته است نسبت به سطح
                  ریسکی که به طور معمول تحمل می‌شود. بنابراین، این شاخص به ما
                  کمک می‌کند تا استراتژی‌هایی را که بازدهی خوبی دارند اما با
                  ریسک بالا، از استراتژی‌های با نسبت بهتری بین بازدهی و ریسک
                  تمیز کنیم.
                </p>
              </div>
              <div className="border-2 rounded-md shadow-emerald-100 dark:shadow-emerald-900 shadow-lg p-4 m-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <b className="text-gray-900 dark:text-white">
                    لیگ بازدهی به بیشینه کاهش
                  </b>
                  <br />
                  این شاخص نسبت بازدهی نهایی به بیشینه کاهش استراتژی را نمایش
                  می‌دهد. در واقع، نشان می‌دهد که استراتژی نسبت به حداکثر افت
                  ریسکی که تجربه کرده است چقدر سودآور است. این معیار مهم است
                  زیرا بسیاری از سرمایه‌گذاران تمایلی به تحمل افت‌های بالا
                  ندارند و به دنبال سودآوری با حفظ ریسک مناسب هستند. این شاخص
                  می‌تواند برای افرادی که به دنبال تعادل میان بازدهی و ریسک در
                  سرمایه‌گذاری‌شان هستند مفید باشد.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex p-4 sm:p-8 justify-center items-center w-8/12 flex-col">
            <b className="text-gray-900 dark:text-white">حامیان ما</b>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-5">
              {sponsors.map((item, index) => (
                <a
                  key={index}
                  className={`flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105 ${boxStyle}`}
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-auto w-20 rounded-full"
                  />
                  <p className="text-xs mt-2">{item.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="flex mt-12 p-4 sm:p-8 justify-center flex-row items-center sm:w-8/12 w-11/12">
            <div className="flex items-center flex-col">
              <br />
              <img
                src={poster}
                alt="poster"
                className="sm:size-4/5 shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
