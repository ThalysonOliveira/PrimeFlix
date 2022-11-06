import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from "./styles";


function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
