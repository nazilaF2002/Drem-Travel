
import React from 'react';
import Parent from './assets/components/parent';
import Header from './assets/components/header';
import SelectOption from './assets/components/slectOption';
import Destinations from './assets/components/destinations';

function App() {
  return (
 <Parent>
     <Header/>
     <SelectOption/>
     <Destinations />
 </Parent>
  );
}

export default App;