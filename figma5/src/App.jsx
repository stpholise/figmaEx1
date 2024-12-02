// import { useState } from 'react'
import ProgressBar from './Components/ProgressBar'
import TodoList from './Components/TodoList';
import Dropdown from './Components/Dropdown';
import DropdownForm from './Components/DropdownForm';
import CustomSlider from './Components/CustomSlider'
import  Dropzone from './Components/Dropzone'
import YoutubeForm from './pages/YoutubeForm'
import ReactSelect from './pages/ReactSelect'
import PasswordChecker from './Components/PasswordChecker'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './App.css'
import RcSlider from './Components/Slider';
import Animation from './pages/Animation';
import Checklist from './pages/CheckList';
import Search from './pages/Search';
import Posts from './pages/Posts';



function App() {
  const testData = [
    { bgcolor: "#084482", completed: 30 },
    { bgcolor: "#084482", completed: 80 },
    { bgcolor: "#084482", completed: 80 },
  ];

  const renderProgressBars = () => {
    return testData.map((item, idx) => (
      <div key={idx} className="progress-container">
        <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
      </div>
    ));
  };

  return (
    <>
    <Router>
      <div className="App">
        <h1>Progress Bars</h1>
        {renderProgressBars()}
      </div>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/dropdownform" element={<DropdownForm />} />
        <Route path="/dropzone" element={<Dropzone />} />
        <Route path="/rcslider" element={<RcSlider />} />
        <Route path="/customslider" element={<CustomSlider />} />
        <Route path="/password" element={<PasswordChecker />} />
        <Route path="/form" element={<YoutubeForm />} />
        <Route path="/select" element={<ReactSelect />} />
        <Route path="/animate" element={<Animation />} />
        <Route path="/check" element={<Checklist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/posts" element={<Posts />} />

      </Routes>
    </Router>
    </>
  );
}

export default App
