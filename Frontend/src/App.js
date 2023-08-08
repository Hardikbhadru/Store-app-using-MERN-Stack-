import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/User/Login';
import Registration from './components/User/Registration';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path='/regitration'
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            exact
            path='/admin-dashboard'
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            exact
            path='/user-dashboard'
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            exact
            path='/product'
            element={
              <>
                <Registration />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
