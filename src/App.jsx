import "./App.scss";
import Dictionary from "./components/Dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary project</header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by </footer>
      </div>
    </div>
  );
}

export default App;
