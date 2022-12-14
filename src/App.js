import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <ItemListContainer />
        </NavBar>
      </header>
    </div>
  );
}

export default App;
