import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../components/landingpage/index'
import SignIn from '../components/login/index';
import Admin from "../components/admin";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn />}>
                 <Route path="blogs" element={<Homepage />} />
                   </Route> */}
          <Route path="/" element={<SignIn />}></Route>
          <Route path="admin" element={<Homepage />}>
          <Route path="mapview" element={<SignIn />}/>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}