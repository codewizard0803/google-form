import "./App.css";
import GoogleForm from "./component/GoogleForm";
import GlobalContextProvider from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GlobalContextProvider>
      <ToastContainer />
      <div className="App">
        <GoogleForm />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
