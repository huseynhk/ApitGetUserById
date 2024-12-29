import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./Pages/Test";
import UserIdPage from "./Pages/UserId";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Test />} />
        <Route path={`${ROUTER.Detail}/:id`} element={<UserIdPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
