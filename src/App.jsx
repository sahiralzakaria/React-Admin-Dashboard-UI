import { Sidebar } from "./components/sidebar/Sidebar"
import Topbar from "./components/topBar/TopBar"
import './app.css';

function App() {

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>


  )
}

export default App
