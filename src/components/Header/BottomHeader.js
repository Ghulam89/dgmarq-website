import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { H2 } from "../common/Heading";

const BottomHeader = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState([]);
  const [productDetails, setProductsDetails] = useState({});

  const Items = [
    { id: 1, name: "Bestsellers", Url: "/sellers" },
    { id: 2, name: "Gift ideas", Url: "/gift-ideas" },
    { id: 3, name: "Random Keys", Url: "/random-keys" },
    { id: 4, name: "Software", Url: "/software-dealer" },
  ];

  useEffect(() => {
    axios
      .get(`${Base_url}/brands/getAll`)
      .then((res) => {
        setSubCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
  };

  const handleCategoryHover = (category) => {
    if (category.midcategories?.length > 0) {
      setSelectedCategory(category.midcategories);
      setProductsDetails(category);
    } else {
      setSelectedCategory(null);
      setSubSubCategory([]);
      setProductsDetails({});
    }
  };

  const handleSubCategoryHover = (submenu) => {
    setSubSubCategory(submenu.subcategories || []);
  };

  const handleMouseLeave = () => {
    setSelectedCategory(null);
    setSubSubCategory([]);
    setProductsDetails({});
    setDesktopMenuOpen(false);
  };

  return (
    <nav className="hidden md:block bg-primary">
      <div className="max-w-[1170px] mx-auto flex items-center md:px-3 px-0 gap-6 pt-1">
        <div className="flex justify-between relative w-full items-center gap-2">
          <button
            onClick={toggleDesktopMenu}
            className="flex text-white text-sm bg-[#212121] gap-4 font-semibold items-center w-full uppercase px-12 py-2.5 hover:bg-[rgb(66,66,66)] rounded-sm"
          >
            <RxHamburgerMenu className="w-5 h-5" />
            Categories
          </button>

          {desktopMenuOpen && (
            <>
              {selectedCategory && (
                <div
                  onClick={() => setDesktopMenuOpen(false)}
                  className="fixed cursor-pointer top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-[rgba(0,0,0,0.6)]"
                ></div>
              )}

              <section
                className="absolute z-50 left-0 right-0 top-10 h-full"
                onMouseLeave={handleMouseLeave} // Closes menu on mouse leave
              >
                <div className="flex">
                  <div className="w-64 overflow-y-auto h-96 bg-white border">
                    <ul className="flex flex-col w-full">
                      {subCategory?.map((category) => (
                        <Link
                          to={`/category/${category._id}`}
                          key={category._id}
                          className={`flex items-center font-normal text-sm gap-2 px-4 py-2.5 cursor-pointer hover:bg-gray-100`}
                          onMouseEnter={() => handleCategoryHover(category)}
                        >
                          {category.name}
                          {category.midcategories?.length > 0 && (
                            <LiaAngleRightSolid className="ml-auto" size={12} />
                          )}
                        </Link>
                      ))}
                    </ul>
                  </div>

                  {selectedCategory && (
                    <div className="flex bg-white h-96 pt-3 w-72 overflow-y-auto flex-col">
                      {selectedCategory.map((submenu) => (
                        <Link
                          to={`/sub-category/${submenu._id}`}
                          key={submenu._id}
                          onMouseEnter={() => handleSubCategoryHover(submenu)}
                          className="px-4 cursor-pointer py-2 flex"
                        >
                          <h3 className="text-sm flex w-full text-gray-700">
                            {submenu.title}
                          </h3>
                          {submenu.subcategories?.length > 0 && (
                            <LiaAngleRightSolid className="ml-auto" size={12} />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}

                  {subSubCategory.length > 0 && (
                    <div className="flex bg-white h-96 pt-3 w-72 overflow-y-auto flex-col">
                      {subSubCategory.map((submenu) => (
                        <Link
                          to={`/sub-sub-category/${submenu._id}`}
                          key={submenu._id}
                          className="px-4 cursor-pointer py-2 flex"
                        >
                          <h3 className="text-sm flex w-full text-gray-700">
                            {submenu.title}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  )}

                  {productDetails?.image && (
                    <Link
                      to={`/category/${productDetails._id}`}
                      className="flex border-l bg-white h-96 w-72 flex-col"
                    >
                      <div className="h-48">
                        <img
                          src={productDetails.image}
                          className="object-center h-full w-full"
                          alt={productDetails.name}
                        />
                      </div>
                      <div className="h-28 flex justify-center items-center">
                        <H2 className="uppercase">{productDetails.name}</H2>
                      </div>
                    </Link>
                  )}
                </div>
              </section>
            </>
          )}

          {Items.map((item) => (
            <Link
              key={item.id}
              className="text-white bg-[#212121] hover:bg-[rgb(66,66,66)] py-2 text-sm rounded-sm w-full text-center"
              to={item.Url}
            >
              {item.name}
            </Link>
          ))}

          <Link
            className="text-white bg-[#6202EA] py-2 text-sm rounded-sm w-full text-center hover:bg-[rgb(113,27,236)]"
            to="#"
          >
            Save more with DGMARQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomHeader;
