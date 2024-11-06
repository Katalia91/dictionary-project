import "./App.scss";
import Dictionary from "./components/Dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by 👩‍💻Natalia Kur and is{" "}
          <span className="footer">
            <a
              href="https://github.com/Katalia91/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </span>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
