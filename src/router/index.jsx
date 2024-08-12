import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../components/landingpage/index'
import SignIn from '../components/login/index';
import Datatable from '../components/report/databable';


function router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn />}>
                 <Route path="blogs" element={<Homepage />} />
                   </Route> */}
          <Route path="/" element={<SignIn />}></Route>
          <Route path="admin" element={<Homepage />}>
          <Route path="mapview" element={<SignIn />}/>
          <Route path="OverSpeed" element={<Datatable />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router