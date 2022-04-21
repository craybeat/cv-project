import General from "./component/General";
import Education from "./component/Education";
import Practical from "./component/Practical";
import './App.css';

function App() {
  return (
    <div className="App">
      <General />
      <Education />
      <Practical/>
    </div>
  );
}

export default App;
