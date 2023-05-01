
import "./App.css";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
function App() {
  return (
    <div>
      <h1 className="heading">*Wine Data Chart* </h1>
      <h1 className="heading">Line Chart </h1>
      <LineChart/>
      <h1 className="heading">Bar Chart </h1>
      <BarChart />
      <br/>
      <br/>
    </div>
  );
}

export default App;
