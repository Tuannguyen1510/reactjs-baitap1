import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import HomeSetState from "./components/setState/HomeSetState";
import LayoutOnTap from "./components/OnTap/LayoutOnTap.jsx";
import TangGiamChu from "./components/OnTap/TangGiamChu";
import PropLayout from "./components/OnTap/PropLayout";
import LayOutProp from "./components/OnTapProp/LayOutProp";
import PhoneLayout from "./components/OnTapProp/PhoneLayout";
import BaiTapGioHnag from "./components/Page/BaiTapGioHang/BaiTapGioHnag";
import ShoesStore from "./components/Page/BaiTapGiay/ShoesStore";
import ReactForm from "./components/Form/ReactForm";
import Cycle from "./components/ReactLifeCycle/Cycle";
import DemoRedux from "./components/DemoRedux/DemoRedux";
import LayoutValliation from "./components/formValiation/LayoutValliation";
import BaiTapBurger from "./components/BaiTapBurger/BaiTapBurger";

//Cấu hình redux store
import { Provider } from "react-redux";
import { store } from "./components/redux/configStore";

import "./scss/HomeState.scss";
import BaiTapGame from "./components/Page/BaiTapGame/BaiTapGame";
import UseStateDemo from "./components/HookDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./components/HookDemo/UseEffectDemo/UseEffectDemo";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store={store}>
      {/* <HomeLayout/> */}

      {/*HomeSetState, Bài tập 1   */}
      {/* <HomeSetState/> */}

      {/* <LayoutOnTap/> */}
      {/* <TangGiamChu/> */}
      {/* <PropLayout/> */}
      {/* <LayOutProp/> */}
      {/* <PhoneLayout/> */}
      {/* <BaiTapGioHnag/> */}

      {/*ShoesStore, Bài tập 2   */}
      {/* <ShoesStore/> */}

      {/* <ReactForm/> */}
      {/* <Cycle/> */}

      {/*  form valiation , Bài tập 3 */}
      {/* <LayoutValliation /> */}

      {/* BaiTap Burger , Bài Tập 4*/}
      <BaiTapBurger />

      {/* <DemoRedux /> */}
      {/* <BaiTapGame/> */}
      {/* <UseStateDemo/> */}
      {/* <UseEffectDemo/> */}
    </Provider>
  </div>
);
