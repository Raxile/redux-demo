import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Post from "./pages/posts";
import Navbar from "./components/Navbar";
//import toastify css
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
