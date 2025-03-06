import { Route, Routes, useLocation } from "react-router-dom";
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
import BuyerSupport from "./screens/Buyer/BuyerSupport";
import SellerSupport from "./screens/Sellers/SellerSupport";
import TermsConditions from "./screens/TermsConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import HowToBuy from "./screens/HowToBuy";
import StaySafe from "./screens/StaySafe";
import Dashboard from "./screens/Buyer/Dashboard";
import SubCategory from "./screens/SubCategory";
import SubSubCategory from "./screens/SubSubCategory";
import { useEffect } from "react";
import GatherDetails from "./components/Gather/GatherDetails";
import StoreProduct from "./screens/SellerStore/StoreProduct";
import AboutSellerStore from "./screens/SellerStore/AboutSellerStore";
import Checkout from "./screens/checkout";
import Shop from "./screens/Shop/Shop";
import ContactUs from "./screens/ContactUs";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "./store/productSlice";
import Keys from "./screens/Buyer/Keys";
import OrderHistory from "./screens/Buyer/OrderHistory";
function App() {
  const { pathname } = useLocation();

  const toggle = useSelector((state) => state.next.toggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setToggle(!toggle));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let myObject = {};
myObject.toggle = true;

if (myObject) {
  myObject.toggle = true;
} else {
  console.error('myObject is undefined');
}
  return (
    <>
      <ToastContainer/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sellers" element={<Sellers/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/category/:id" element={<Category/>} />
      <Route path="/sub-category/:id" element={<SubCategory/>} />
      <Route path="/sub-sub-category/:id" element={<SubSubCategory/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgot-password" element={<ForgetPassword/>} />
      <Route path="/new-password" element={<NewPassword/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/seller-store" element={<SellerStore/>} >
         <Route path="store-products/:id" element={<StoreProduct/>} /> 
         <Route path="about" element={<AboutSellerStore/>} /> 
      </Route>
      <Route path="/new-details/:id" element={<NewDetails/>} />
      <Route path="/gather-details/:id" element={<GatherDetails/>} />
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
      <Route path="/buyer-support" element={<BuyerSupport />} />
      <Route path="/how-to-buy" element={<HowToBuy />} />
      <Route path="/stay-safe" element={<StaySafe />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/keys" element={<Keys/>} />
      <Route path="/order-history" element={<OrderHistory/>} />
      <Route path="/seller-support" element={<SellerSupport />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     </Routes> 
    </>
  );
}

export default App;
