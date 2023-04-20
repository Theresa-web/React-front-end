import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Joblist } from './components/Joblist';
import Datafile from './Datafile.json'

 

function App() {

  return (
    <div className="App">
      <Header />
      <Joblist data={Datafile} />
    </div>
  );
}

export default App;
