import React from 'react'
import { Chart } from '../../components/chart'

const text = `
این مسابقه قراره توی سه تا لیگ به نام‌های لیگ یک لیگ دو و لیگ سه برگزار بشه که هرکدوم جایزه‌ی مخصوص به خودش رو داره
`
function Prize() {
  return (
    <div>
      <div className='flex flex-col space-y-11 items-center justify-center h-screen'>
        <h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100'>
          برنده‌ها
        </h1>
      <Chart width={800} height={600} />
      <p className='text-gray-600 dark:text-gray-300 sm:w-1/2'>
        {text}
      </p>
      </div>
    </div>
  )
}

export default Prize
