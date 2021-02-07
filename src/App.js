import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList';
const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 40000,
    "date": "2021-02-04",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName": "airplane"
    }
  },
  {
    "id": 2,
    "title": "去西藏旅游",
    "price": 80000,
    "date": "2021-02-03",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName": "airplane"
    }
  },
]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PriceList 
        items={items}
        // items="abc"
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}}
      />
    </div>
  );
}

export default App;
