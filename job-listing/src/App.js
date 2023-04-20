import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Joblist } from './components/Joblist';
import Datafile from './Datafile.json'
import {Singlejob} from './components/SingleJob'

 

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Singlejob
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
