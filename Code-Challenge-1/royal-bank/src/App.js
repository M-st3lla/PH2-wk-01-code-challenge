import './App.css';
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions"
import ButtonsExample from './components/SearchBar';
import FormFloatingBasicExample from './components/input';

function App() {
  return (
    <div className="App">
      <Navbar /><br /><br />
      <ButtonsExample /><br />
      <Transactions />
      <FormFloatingBasicExample />
    </div>
  );
}

export default App;
