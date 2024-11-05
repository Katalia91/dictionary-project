import "./App.scss";
import Dictionary from "./components/Dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header"><h1>Dictionary</h1></header>
        <div>What word would you like to look up?</div>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by </footer>
      </div>
    </div>
  );
}

export default App;
