import React from 'react';
import FAQ from '../../components/faq';
import { Faqs } from '../../configs/faq/data';


const App = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">سوالات پرتکرار</h1>
      <FAQ faqs={Faqs} />
    </div>
  );
};

export default App;
