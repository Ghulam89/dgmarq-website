import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Sellers from "./screens/Sellers";
import Category from "./screens/Category";
import Wishlist from "./screens/Wishlist";
import ProductDetails from "./screens/ProductDetails";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import ForgetPassword from "./screens/auth/ForgetPassword";
import NewPassword from "./screens/auth/ForgetPassword/NewPassword";
import News from "./screens/News";
import NewDetails from "./screens/News/NewDetails";
import Cart from "./screens/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SellerStore from "./screens/SellerStore";
import GiftIdeas from "./screens/GiftIdeas";
import RandomKeys from "./screens/RandomKeys";
import SoftwareDealers from "./screens/Software";
import DigitalServicesAct from "./screens/DigitalServicesAct/DigitalServicesAct";
import Reviews from "./components/Reviews/Reviews";
import Careers from "./screens/Careers/Careers";
import Partnerships from "./screens/Partnerships/Partnerships";
import Reliability from "./screens/Reliability/Reliability";
import AffiliateProgram from "./screens/AffiliateProgram/AffiliateProgram";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <>
      <ToastContainer/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sellers" element={<Sellers/>} />
      <Route path="/category/:id" element={<Category/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgot-password" element={<ForgetPassword/>} />
      <Route path="/new-password" element={<NewPassword/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/seller-store" element={<SellerStore/>} />
      <Route path="/new-details/:id" element={<NewDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/gift-ideas" element={<GiftIdeas/>} />
      <Route path="/random-keys" element={<RandomKeys/>} />
      <Route path="/software-dealer" element={<SoftwareDealers/>} />
      <Route path="/DigitalServicesAct" element={<DigitalServicesAct/>} />
      <Route path="/review" element={<Reviews/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/partnerships" element={<Partnerships />} />
      <Route path="/reliability" element={<Reliability />} />
      <Route path="/affiliate_program" element={<AffiliateProgram />} />
     </Routes>
    </>
  );
}

export default App;
