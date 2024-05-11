import { useMemo } from 'react'
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

export function App () {
  const memoizedHeader = useMemo(() => {
    return <Header />
  }, [])
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
