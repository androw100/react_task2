
import './App.css';
import Center from './components/Center';
import Courses from './components/Courses';
import Details from './components/details';



function App() {
  return (
    <div className="App">
<Courses code="123" name="react_course" level="advansed"/>
<hr/>
<Center center_desc="senior steps"/>
<hr/>
<Details con1="react"  con2="redux"  con3="next"/>

    </div>
  );
}

export default App;
