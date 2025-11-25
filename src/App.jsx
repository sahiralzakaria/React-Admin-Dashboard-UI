import { Sidebar } from "./components/sidebar/Sidebar"
import Topbar from "./components/topBar/TopBar"
import './app.css';
import { Home } from "./pages/home/Home";

function App() {

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>


  )
}

export default App
