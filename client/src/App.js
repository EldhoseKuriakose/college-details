import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.component';
import CollegeList from './components/CollegeList/CollegeList.component';
import './App.css';

function App() {
  const [collegeList, setCollegeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/college/getAllColleges',
      );

      setCollegeList(result.data.data);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <Navbar />
      {
        collegeList
        ? <CollegeList collegeList={collegeList} />
        : ''
      }
    </div>
  );
}

export default App;
