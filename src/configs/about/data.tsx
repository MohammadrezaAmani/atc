/*

  * The data in this section will be displayed in the about section.

*/

import { IconType } from "react-icons";
import pic2 from "../../assets/pic2.png";
const Data = {
  image: pic2,
  en: {
    title: "AmirKabir Trade Challenge",
    content: (
      <p>
        Algorithmic trading is the name of an approach in financial markets;
        This means that the transactions that are done by human agents are done
        by machines with predetermined instructions. The lower the involvement
        of the human factor in the buying and selling process, the closer it
        will be to algorithmic transactions. In recent years, when machine
        learning has developed a lot, intelligent tools were made that can think
        instead of humans and in many cases, perform better than humans. For
        this reason, similar to other fields, it has become customary to use
        these tools in financial fields. These tools can algorithmize
        transactions in two parts: Ordering and automatic implementation of the
        trading algorithm Designing a trading strategy and providing buy and
        sell signals The second part of the above statement is the goal of ATC
        competition. ATC is a serious challenge in the field of algorithmic
        trading, during which participants must implement their trading
        strategies in Python and finally compete in 3 indicators. The language
        used to design and implement these algorithms is the Python programming
        language, which was chosen because of its simplicity and richness of
        libraries. The following can be mentioned about the goals of this
        competition: Creating a context for entering the academic space into
        financial fields An attempt to standardize the atmosphere governing
        algorithmic transactions in Iran Teaching and familiarizing the
        participants with the stages of developing trading strategies
        Discovering top talents in financial fields Creating a communication and
        observable bridge between artificial intelligence and economy The
        competition indicators, which are prominent indicators in the
        qualitative measurement of trading strategies, function in such a way
        that each participant can choose which of the indicators to compete with
        other competitors. To some extent, it has been tried to select the
        indicators in such a way that they do not have much overlap. For
        example, it is possible that a trading strategy has a lot of risk (for
        example, it has a lot of drawdowns) but in the end it earns a lot of
        profit. In this case, this strategy will have a low Sharp ratio, which
        automatically makes it earn a high score only in the Return section. The
        indicators that were considered for the competition are as follows:
        Return Sharp ratio Return/Max_Drawdown The first indicator is the final
        yield of the strategy, which, of course, is divided into buy-and-hold
        profit to be meaningful. The second index is a well-known index that
        shows the quality of the trades made according to the expected profit of
        the trades (transactions) and the standard deviation of the profits. The
        third indicator is actually a type of emotional profit-to-risk
        indicator. In fact, many financial fund investors are not willing to
        bear high drawdowns.
      </p>
    ),
    imageText: "ATC information",
    contact_ways: {
      title: "",
      content: <p></p>,
      ways: [],
    },
  },
  fa: {
    title: "مسابقات ترید امیرکبیر",
    content: (
      <p>
        معاملات الگوریتمی، نام یک رویکرد در بازار های مالی است؛ بدین معنا
        معاملاتی که توسط عامل انسانی انجام میشوند، توسط ماشین و با دستورات از
        پیش تعیین شده انجام گردد. هر میزان که دخالت عامل انسانی در فرآیند خرید و
        فروش کمتر باشد، ماهیت نزدیک تری به معاملات الگوریتمی خواهد داشت. طی سال
        های اخیر که یادگیری ماشینی توسعه زیادی پیدا کرده است، ابزار های هوشمندی
        ساخته شدند که می توانند به جای انسان فکر کنند و در موارد زیادی، بهتر از
        انسان عمل نمایند. به همین دلیل مشابه سایر حوزه ها، در حوزه های مالی هم
        استفاده از این ابزار ها مرسوم شده است. این ابزار ها در دو بخش می توانند
        معاملات را الگوریتمی کنند : اردرگذاری(سفارش گذاری) و پیاده سازی اتوماتیک
        الگوریتم معاملاتی طراحی استراتژی معاملاتی و ارائه سیگنال های خرید و فروش
        بخش دوم گزاره فوق هدف مسابقه ATC است. ATC یه چالش جدی در حوزه معاملات
        الگوریتمی است که طی آن شرکت کنندگان باید به زبان پایتون استراتژی های
        معاملانی خود را پیاده سازی کنند و در نهایت در 3 شاخص با هم به رقابت
        بپردازنند. زبانی که برای طراحی و پیاده سازی این الگوریتم ها استفاده
        میگردد، زبان برنامه نویسی پایتون است که به دلیل سادگی هرچه بیشتر و غنی
        بودن لایبرری ها(کتابخانه ها) انتخاب شده است. درباره اهداف این مسابقه می
        توان به موارد زیر اشاره کرد : ایجاد زمینه ای برای وارد شدن فضای آکادمیک
        به حوزه های مالی تلاشی برای استاندارد سازی فضای حاکم بر معاملات
        الگوریتمی در ایران آموزش و آشنایی با مراحل توسعه استراتژی های معاملاتی
        به شرکت کنندگان کشف استعداد های برتر در زمینه های مالی ایجاد پلی ارتباطی
        و قابل رصد میان هوش مصنوعی و اقتصاد شاخص های مسابقه که از شاخص های مطرح
        در سنجش کیفی استراتژی های معاملاتی هستند کارکردی به این صورت دارند که هر
        شرکت کننده می تواند انتخاب کند که در کدام یک از شاخص ها با سایر رقبا
        رقابت کند. تاحدود زیادی سعی شده است که شاخص ها به نحوی انتخاب بشوند که
        همپوشانی زیادی نداشته باشند. به طور مثال، ممکن است که یک استراتژی
        معاملاتی، ریسک خیلی زیادی داشته باشه(مثلا دراوداون های زیادی داشته باشد)
        ولی در نهایت سود زیادی رو کسب نماید. در این صورت، این استراتژی Sharp
        ratio پایینی خواهد داشت که خود به خود باعث میشود که فقط در بخش Return
        امتیاز بالایی کسب نماید. شاخص هایی که برای مسابقه در نظر گرفته شدند، به
        شرح زیر هستند : Return Sharp ratio Return/Max_Drawdown شاخص اول همان
        بازده نهایی استراتژی می باشد که البته برای معنادار شدن، به سود
        بای-اند-هلد تقسیم میگردد. شاخص دوم یک شاخص شناخته شده است که نشان دهنده
        کیفیت ترید های انجام شده با توجه به امید سود ترید ها(معاملات) و انحراف
        معیار سود ها است. شاخص سوم، در واقع یک نوع شاخص احساسی سود به ریسک
        میباشد. درواقع بسیاری از سرمایه گذاران صندوق های مالی، حاضر نیستند
        دراوداون های بالایی را متحمل بشوند.
      </p>
    ),
    imageText: "متن مسابقات ترید امیرکبیر",
    contact_ways: {
      title: "",
      content: <p></p>,
      ways: [],
    },
  },
};

export default Data;

export type aboutType = typeof Data;

export type contact_type = {
  title: string;
  content: string;
  icon: IconType;
  url: string;
};
