import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Post from "./pages/Post";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>saga demo</h1>
        <Post />
      </div>
    </Provider>
  );
}

export default App;
