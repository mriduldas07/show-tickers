// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Navbar/Topbar";
import BookedTicket from "./pages/BookedTiceket/BookedTicket";
import DetailsShow from "./pages/DetailsShow/DetailsShow";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:showsId" element={<DetailsShow />} />
        <Route path="/booked/:showsId" element={<BookedTicket />} />
      </Routes>
    </div>
  );
}

export default App;
