import React from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <Header/>
      <main>
      <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
