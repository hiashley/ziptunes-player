import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListPlaylist from "./pages/ListPlaylist";
import SinglePlaylist from "./pages/SinglePlaylist";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/playlist" element={<ListPlaylist />} />
          <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
        </Routes>
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;
