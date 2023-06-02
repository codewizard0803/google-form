import "./App.css";
import GoogleForm from "./component/GoogleForm";
import GlobalContextProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <GoogleForm />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
