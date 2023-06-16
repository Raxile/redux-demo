import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";

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
