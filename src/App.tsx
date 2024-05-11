import { useMemo, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './app/page'
import Prizes from './app/prizes/page'
import About from './app/about/page'
import FAQ from './app/faq/page'
import Login from './app/login/page'
import SignUp from './app/signup/page'
import Header from './components/header'
import Footer from './components/footer'
import { routes } from './configs/routes'
import { Layout } from './app/layout'
import { useTheme } from './hooks/themeHook'

export function App () {
  const memoizedHeader = useMemo(() => {
    return <Header />
  }, [])
  const { setTheme } = useTheme()
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.style.backgroundColor = 'rgb(38, 38, 38)'
      }
      if (localTheme === 'light') {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.backgroundColor = '#fff'
      }
    }
  }, [setTheme])
  const memoizedFooter = useMemo(() => <Footer slug='/' />, [])
  const router = createBrowserRouter([
    {
      path: routes.home.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<Home />}
        />
      )
    },
    {
      path: routes.prizes.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<Prizes />}
        />
      )
    },
    {
      path: routes.signup.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<SignUp />}
        />
      )
    },
    {
      path: routes.about.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<About slug={routes.about.path} />}
        />
      )
    },
    {
      path: routes.login.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<Login />}
        />
      )
    },
    {
      path: routes.faq.path,
      element: (
        <Layout
          memoizedHeader={memoizedHeader}
          memoizedFooter={memoizedFooter}
          children={<FAQ />}
        />
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
