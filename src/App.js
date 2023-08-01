import React from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <h1>Welcome to your NO.1 Cloud Cafeteria</h1>
      <Header/>
      <main>
      <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
