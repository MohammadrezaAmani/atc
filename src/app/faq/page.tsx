import React from "react";
import FAQ from "../../components/faq";
import { Faqs } from "../../configs/faq/data";

const App = () => {
  return (
    <div className="container mx-auto mt-8 w-11/12 sm:w-8/12 text-center">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        سوالات پرتکرار
      </h1>
      <FAQ faqs={Faqs} />
    </div>
  );
};

export default App;
