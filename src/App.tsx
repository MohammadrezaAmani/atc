import { Suspense } from "react";
import { useEffect, startTransition, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./app/page";
import Prizes from "./app/prizes/page";
import About from "./app/about/page";
import FAQ from "./app/faq/page";
import Login from "./app/login/page";
import SignUp from "./app/signup/page";
import Header from "./components/header";
import Footer from "./components/footer";
import { routes } from "./configs/routes";
import { Layout } from "./app/layout";
import { useLang } from "./hooks/langHook";
import { langs } from "./configs/langs";


export function App() {
  const { lang, setLang } = useLang();
  useEffect(() => {
    const updateLanguage = (newLang: string) => {
      if (!Object.keys(langs).includes(newLang)) {
        newLang = Object.keys(langs)[0];
      }
      startTransition(() => {
        document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
        document.documentElement.lang =
          langs[newLang as keyof typeof langs].short;
        setLang(newLang as keyof typeof langs);
        localStorage.setItem("lang", newLang);
      });
    };
    const initializeLanguage = () => {
      const newLang = localStorage.getItem("lang") || "";
      if (Object.keys(langs).includes(newLang)) {
        updateLanguage(newLang);
      }
    };
    initializeLanguage();
  }, [setLang]);

  const memoizedHeader = useMemo(() => {
    return <Header />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFooter = useMemo(() => <Footer slug="/" />, [lang]);
  const router = createBrowserRouter([
    {
      path: routes.home.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<Home />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.prizes.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<Prizes />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.signup.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<SignUp />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.about.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<About slug={routes.about.path} />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.login.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<Login />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.faq.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<FAQ />}
          />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
