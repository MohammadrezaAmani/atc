import React from 'react'

function Login () {
  function handleSubmit (e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-md'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100'>
            خوش برگشتید!
          </h1>
          <p className='text-gray-600 dark:text-gray-300 mt-2'>
            بی‌صبرانه منتظرتون بودیم :)
          </p>
        </div>
        <form className='mt-8 space-y-6 flex flex-col'>
          <input
            type='email'
            placeholder='ایمیلتون'
            className='input border-2 border-neutral-200 rounded-lg p-1'
          />
          <input
            type='password'
            placeholder='رمزتون'
            className='input border-2 border-neutral-200 rounded-lg p-1'
          />
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn text-black dark:text-white shadow-sm border-2 border-neutral-400  rounded-lg p-1 hover:bg-neutral-500 hover:text-white transition duration-300 ease-in-out'
          >
            ورود به حساب کاربری
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
