import React from 'react';
import Header from './components/Header';
import Travel from './components/Travel';
import data from './data'


function App() {

  return (
    <div>
      <Header />
      <Travel data={data} />
    </div>
  );
}

export default App;
