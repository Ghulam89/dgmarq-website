import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import ProfilePopup from "./ProfilePopup";
import { FaAngleDown } from "react-icons/fa";
import SearchResults from "./SearchResults";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productData = useSelector((state) => state?.next?.productData);
  const { userInfo } = useSelector((state) => state.next);
  const [wishList, setWishList] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [Category, setCategory] = useState("All categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const dropdownRef = useRef(null);

  const iconLinks = [
    {
      href: "/wishlist",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          font-size="20"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.0521 3.05014C4.78562 0.316619 9.21779 0.316619 11.9513 3.05014C11.968 3.06688 11.9847 3.08369 12.0012 3.10055C12.0177 3.08369 12.0344 3.06689 12.0511 3.05014C14.7846 0.316619 19.2168 0.316619 21.9503 3.05014C24.6838 5.78367 24.6838 10.2158 21.9503 12.9494L12.7073 22.1924C12.5198 22.3799 12.2654 22.4853 12.0001 22.4853C11.7349 22.4852 11.4805 22.3799 11.293 22.1923L2.0521 12.9494C2.05207 12.9493 2.05205 12.9493 2.05202 12.9493C-0.681428 10.2158 -0.681402 5.78364 2.0521 3.05014ZM10.5371 4.46436C8.58462 2.51188 5.41879 2.51188 3.46631 4.46436C1.51383 6.41683 1.51383 9.58267 3.46631 11.5351L3.46639 11.5352L12.0003 20.071L20.5361 11.5351C22.4886 9.58267 22.4886 6.41683 20.5361 4.46436C18.5836 2.51188 15.4178 2.51188 13.4653 4.46436C13.2255 4.70415 13.0163 4.96306 12.8344 5.23719C12.6491 5.5164 12.3363 5.68425 12.0012 5.68425C11.6661 5.68425 11.3533 5.5164 11.168 5.23719C10.9861 4.96316 10.776 4.70323 10.5371 4.46436Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Wishlist",
      Show: (
        <div className=" w-6 h-6 bg-blue rounded-full flex justify-center items-center text-sm">
          {wishList?.length}
        </div>
      ),
    },
    {
      href: "/cart",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="currentColor"
          font-size="20"
        >
          <g
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
          >
            <circle cx="6" cy="22" r="1" stroke="none"></circle>
            <circle cx="20" cy="22" r="1" stroke="none"></circle>
            <circle
              cx="6"
              cy="22"
              r="1"
              fill="none"
              stroke-miterlimit="10"
            ></circle>
            <circle
              cx="20"
              cy="22"
              r="1"
              fill="none"
              stroke-miterlimit="10"
            ></circle>
            <path
              fill="none"
              stroke-miterlimit="10"
              d="M4.8 7H22l-2 10H6L4 2H1"
            ></path>
          </g>
        </svg>
      ),
      text: "Cart",
      Show: (
        <div className=" w-6 h-6 bg-blue rounded-full flex justify-center items-center text-sm">
          {productData?.length}
        </div>
      ),
    },
  ];

  const Items = [
    {
      id: 1,
      name: "Bestsellers",
      Url: "/sellers",
    },
    {
      id: 2,
      name: "Gift ideas",
      Url: "/gift-ideas",
    },
    {
      id: 3,
      name: "Random Keys",
      Url: "/random-keys",
    },
    {
      id: 4,
      name: "Software",
      Url: "/software-dealer",
    },
  ];

  useEffect(() => {
    axios
      .get(`${Base_url}/wishlist/get/${userInfo?._id}`)
      .then((res) => {
        setWishList(res?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${Base_url}/category/getAll`)
      .then((res) => {
        setSubCategory(res.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${Base_url}/brands/getAll`)
      .then((res) => {
        setAllCategory(res.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo?._id]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      axios
        .get(`${Base_url}/products/search?title=${query}`)
        .then((res) => {
          setSearchResults(res.data.data || []);
          setIsDropdownOpen(true);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  };

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
    setOpenSubMenu(null); // Reset the open submenu state
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-primary">
        <header className="mx-auto flex gap-8 max-w-[1170px] h-20 items-center justify-between px-3">
          <Link to="/">
            <img
              className="cursor-pointer h-20 object-contain sm:w-auto w-28"
              src={logo}
              alt="company logo"
            />
          </Link>
          <form className="hidden h-11 z-50 w-full bg-white rounded-md items-center md:flex relative">
            <input
              value={searchQuery}
              onChange={handleInputChange}
              className="hidden w-8/12 p-3 rounded-tl-md rounded-bl-md text-sm outline-none md:block relative z-50"
              type="search"
              placeholder="What are you looking for?"
              onFocus={() => searchResults.length > 0 && setIsDropdownOpen(true)}
            />
            <div
              ref={dropdownRef}
              className="relative bg-white w-3/12 z-50 h-full cursor-pointer flex items-center justify-between px-3 border border-gray-200"
            >
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex justify-between items-center w-full"
              >
                <span className="text-sm text-gray-500">{Category}</span>
                <FaAngleDown className="ml-2 text-gray-400" />
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 top-full w-60 bg-white shadow-lg border rounded-sm z-[60]">
                  {allCategory?.map((category) => (
                    <Link
                      to={`/category/${category?._id}`}
                      key={category?._id}
                      className={`px-3 py-2 text-[12px] block text-gray-700 hover:bg-gray-100 ${
                        selectedCategory === category
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                    >
                      {category?.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button
              className="ml-auto text-white h-full z-50 rounded-tr-md rounded-br-md px-5 bg-blue flex items-center justify-center"
              type="submit"
            >
              <IoSearch size={20} />
            </button>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-30 z-45" />
                <ul className="absolute left-0 z-[70] top-10 right-0 bg-white rounded-sm shadow-lg search-dropdown">
                  <SearchResults results={searchResults} />
                </ul>
              </>
            )}
          </form>
          <div className="flex items-center gap-4">
            <div className="">
              <ProfilePopup />
            </div>
            {iconLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex text-white relative bg-slate-800 rounded-full sm:w-12 w-10 sm:h-12 h-10 cursor-pointer flex-col items-center justify-center"
              >
                {link.icon}
                <div className="absolute top-0 -right-2">{link?.Show}</div>
              </Link>
            ))}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <RxHamburgerMenu className="w-7 text-white h-7" />
              </button>
            </div>
          </div>
        </header>
      </div>
      {mobileMenuOpen && (
        <section className="block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-primary">
          <div className="mx-auto">
            <div className="flex flex-col justify-between px-4 items-center gap-2">
              <button
                onClick={toggleDesktopMenu}
                className="flex text-white text-sm gap-4 font-semibold items-center w-full uppercase px-7 py-2.5 bg-[#212121] rounded-sm"
              >
                <RxHamburgerMenu className="w-5 h-5" />
                Categories
              </button>
              {Items?.map((item, index) => (
                <Link
                  key={index}
                  className="text-white bg-[#212121] py-2 px-3 text-sm rounded-sm w-full text-left hover:border-b hover:text-[#EAE5D5]"
                  to={`${item?.Url}`}
                >
                  {item?.name}
                </Link>
              ))}
              <Link
                className="text-white bg-[#6202EA] py-2 text-sm rounded-sm w-full text-left px-3 hover:border-b hover:text-[#EAE5D5]"
                to={"#"}
              >
                Save more with G2A Plus
              </Link>
            </div>
          </div>
          {desktopMenuOpen && (
            <section className="fixed h-full top-0 w-80 z-50 left-0 right-0 bg-white border">
              <div className="container mx-auto flex py-5">
                <div className="sm:w-1/4 w-full border-r">
                  <ul className="flex justify-between mt-6 flex-col w-full">
                    {subCategory?.map((category, index) => (
                      <Link
                      onClick={()=>{setDesktopMenuOpen(false)
                        window.location.reload();
                      }}
                      to={`/category/${category?._id}`}
                        key={index}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                          Category === category?.midcategories
                            ? "bg-gray-200"
                            : "hover:bg-gray-100"
                        }`}
                        onMouseEnter={() => setCategory(category?.midcategories)}
                        // onMouseLeave={() => setHoveredSubMenu(null)}
                      >
                        {category.title}
                        <IoMdArrowDropright className="ml-auto" />
                      </Link>
                    ))}
                  </ul>
                </div>
                {Category && (
                  <div className="sm:w-3/4 flex">
                    {subCategory
                      .find((cat) => cat.midcategories === Category)
                      ?.subcategories.map((submenu, index) => (
                        <div key={index} className="px-4">
                          <Link
                            to={`/category/${submenu?._id}`}
                            className="font-semibold text-gray-700"
                          >
                            {submenu.title}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {submenu.items?.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="relative group"
                              >
                                <div
                                  onClick={() => setOpenSubMenu(openSubMenu === item.label ? null : item.label)}
                                  className="block px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                >
                                  {item.label}
                                </div>
                                {openSubMenu === item.label && item.subItems && (
                                  <ul className="absolute w-full left-full top-0 bg-white border shadow-md">
                                    {item.subItems.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <a
                                          href={subItem.href}
                                          className="block px-3 py-1 hover:bg-gray-100"
                                        >
                                          {subItem.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                )}
                <div>
                <button
                  onClick={closeSubMenu}
                  className="absolute top-3 right-3 text-gray-700"
                >
                  <IoMdClose className="w-6 h-6" />
                </button>
                </div>
               
              </div>
            </section>
          )}
        </section>
      )}
    </>
  );
};

export default Navbar;