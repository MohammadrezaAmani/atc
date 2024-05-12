import React from 'react'

function SignUp () {
  function handleSubmit (e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-8/10 p-5'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100'>
            خوش اومدید!
          </h1>
        </div>
        <form className='mt-8 space-y-6 flex flex-col'>
          <div className='flex justify-between space-x-2 rtl:space-x-reverse'>
          <input
            type='text'
            placeholder='نام'
            className='input border-2 border-neutral-200 rounded-lg p-1'
          />
          <input
            type='text'
            placeholder='نام خانوادگی'
            className='input border-2 border-neutral-200 rounded-lg p-1'
          />
          </div>
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
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  )
}
export default SignUp
