import { homePage } from '../configs/site'
import pic from '../assets/pic.png'
import { sponsors } from '../configs/site'
import winner from '../assets/winner.png'
import more from '../assets/more.png'
import poster from '../assets/poster.png'
import FAQ from '../components/faq'
import { Faqs } from '../configs/faq/data'
const boxStyle =
  'rounded-lg sm:shadow-xl shadow-lg bg-gradient-to-tl from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-900 transform hover:-translate-y-0.5 transition duration-400 ease-in-out md:hover:shadow-2xl hover:shadow-xl'

const text = `مسابقه قراره سه تا لیگ به اسم لیگ‌های یک دو و سه داشته باشه که شما می‌تونید به عنوان داوطلب تو هرکدوم از اون لیگ‌ها شرکت‌کنید`
export default function HomePage () {
  return (
    <div className='relative dark:text-white'>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-wrap justify-center sm:mt-10 w-full gap-4'>
          <div
            className={`flex p-4 sm:p-8 w-10/12 sm:w-auto h-auto justify-center mt-12 sm:mt-0 ${boxStyle}`}
          >
            <img src={pic} alt='Personal Portfolio' className={`rounded-md`} />
          </div>
          <div className='grid grid-cols-12 w-10/12 sm:w-auto gap-4'>
            <div className={`col-span-full p-6 ${boxStyle}`}>
              <div className='flex items-start flex-col'>
                <p className='text-gray-900 dark:text-white'>
                  {homePage.title}
                </p>
                <p className='text-gray-600 dark:text-gray-300'>
                  {homePage.subtitle}
                </p>
              </div>
              <div className='flex flex-col mt-12'>
                {homePage.skills.map((item, index) => (
                  <a
                    href={item.url}
                    target='_blank'
                    className='info flex items-center'
                    rel='noreferrer'
                    key={index}
                  >
                    <item.icon className='h-6 w-6 m-2 text-gray-900 dark:text-white' />
                    <span className='text-gray-900 dark:text-white'>
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`col-span-full p-6 rounded-lg shadow-xl ${boxStyle}`}
            >
              <div className='flex justify-end'>
                <a
                  href='/login'
                  className={`mr-5 p-4 text-md rounded-md shadow-md hover:shadow-xl dark:text-white`}
                >
                  <span>{homePage.cvButton}</span>
                </a>
                <a
                  href='/winners'
                  className={`p-4 rounded-md shadow-md hover:shadow-xl dark:text-white`}
                >
                  <span>{homePage.contactButton}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex p-4 sm:p-8 justify-center items-center w-8/12 flex-col'>
            <b className='text-gray-900 dark:text-white'>حامیان ما</b>
            {/* <br /> */}

            <div className='flex items-center flex-col'>
              <div className='flex justify-center mt-12'>
                <br />
                <div className='grid grid-cols-4 sm:grid-cols-7 gap-2'>
                  {sponsors.map((item, index) => (
                    <a
                      key={index}
                      className={`flex w-auto p-2 h-auto justify-center mt-12 sm:mt-0 ${boxStyle}`}
                      href={item.url}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className='rounded-full h-auto w-16'
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12'>
            <div className='flex items-center flex-col'>
              <p className='text-gray-900 dark:text-white'> درباره‌ی </p>
              <div className='flex flex-col sm:flex-row mt-4 justify-between flex-wrap'>
                <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
                  <b className='text-gray-900 dark:text-white'>مسابقه</b>
                  <br />
                  مسابقه الگوریتم تریدینگ امیرکبیر اولین رویداد با محوریت
                  پیش‌بینی بازارهای سرمایه در ایران است. این مسابقه در سه لیگ
                  مجزا برگزار می‌شود که شرکت‌کنندگان می‌توانند در هر کدام به
                  رقابت بپردازند. در روز آخر رویداد، اختتامیه مسابقه برگزار
                  خواهد شد و در حضور اساتید دانشگاه صنعتی امیرکبیر جوایز اهدا
                  می‌شوند.
                </p>
                <img src={winner} alt='winner' className='sm:w-1/2 h-auto' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12'>
            <div className='flex items-center flex-col'>
              <p className='text-gray-900 dark:text-white'> جوایز </p>
              <div className='flex flex-col sm:flex-row mt-4 justify-between flex-wrap'>
                <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
                  <img src={winner} alt='winner' className='sm:w-1/2 h-auto' />
                  <b className='text-gray-900 dark:text-white'>کلی جایزه!</b>
                  <br />
                  مسابقه الگوریتم تریدینگ امیرکبیر اولین رویداد با محوریت
                  پیش‌بینی بازارهای سرمایه در ایران است. این مسابقه در سه لیگ
                  مجزا برگزار می‌شود که شرکت‌کنندگان می‌توانند در هر کدام به
                  رقابت بپردازند. در روز آخر رویداد، اختتامیه مسابقه برگزار
                  خواهد شد و در حضور اساتید دانشگاه صنعتی امیرکبیر جوایز اهدا
                  می‌شوند.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12'>
            <div className='flex items-center flex-col'>
              <p className='text-gray-900 dark:text-white'>برنده</p>
              <div className='flex flex-col sm:flex-row mt-4 justify-between flex-wrap'>
                <img src={winner} alt='winner' className='sm:w-1/2 h-auto' />
                <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12'>
            <div className='flex items-center flex-col'>
              <p className='text-gray-900 dark:text-white'>اطلاعات بیشتر</p>
              <div className='flex flex-col sm:flex-row mt-4 justify-between flex-wrap'>
                <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
                  {text}
                </p>
                <img src={more} alt='more' className='sm:w-1/2 h-auto' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex mt-12 p-4 sm:p-8 justify-center flex-row items-center w-8/12'>
            <div className='flex items-center flex-col'>
              <p className='text-gray-900 dark:text-white'>اطلاعات بیشتر</p>
              <div className='flex flex-col sm:flex-row mt-4 justify-between flex-wrap'>
                <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
                  {text}
                </p>
                <img src={poster} alt='poster' className='sm:w-auto h-96' />
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto mt-8'>
          <h1 className='text-xl font-bold mb-4'>جواب بعضی از سوالاتون</h1>
          <FAQ faqs={Faqs} />
        </div>
      </div>
    </div>
  )
}
