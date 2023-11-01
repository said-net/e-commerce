import { Toaster } from "react-hot-toast";
import Auth from "./components/auth";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/loader";
import SelectLang from "./components/lang";
import { useEffect } from "react";
import axios from "axios";
import { ACCESS, API } from "./config";
import { setInfoAuth } from "./reducers/auth.reducer";
import Menu from "./components/menu";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/settings";
import Categories from "./pages/categories";

function App() {
  const { loader: { show }, auth: { refresh, _id } } = useSelector(e => e);
  const dp = useDispatch();
  useEffect(() => {
    axios(`${API}/admin/verify-session`, {
      headers: {
        'x-auth-token': ACCESS()
      }
    }).then((res) => {
      const { data, code } = res.data;
      if (code === 200) {
        dp(setInfoAuth(data));
      }
    });
  }, [refresh]);
  if (!_id) {
    return (
      <>
        {show && <Loader />}
        <Auth />
        <Toaster toastOptions={{ position: 'top-right' }} containerStyle={{ zIndex: '99999' }} />
        <SelectLang />
      </>
    );
  } else {
    return (
      <>
        {show && <Loader />}
        <div className="flex items-center justify-between w-full">
          <Menu />
          <div className="flex items-center justify-start flex-col w-full h-screen overflow-y-scroll">
            <Routes>
              <Route path="/settings" element={<Settings />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
            <Toaster toastOptions={{ position: 'top-right' }} containerStyle={{ zIndex: '99999' }} />
          </div>
        </div>

        <SelectLang />
      </>
    )
  }
}

export default App;