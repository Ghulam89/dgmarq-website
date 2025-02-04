import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutdoorGrill } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { LiaAngleRightSolid } from "react-icons/lia";
import { H1, H2 } from "../common/Heading";

const BottomHeader = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [productDetails, setProductsDetails] = useState({})
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  const categories = [
    {
      category: "Gaming",
      icon: <FaBed />,
      menu: [
        {
          title: "Bedroom Essentials",
          items: [
            {
              label: "Luxurious Italian Bed",
              subItems: [
                { label: "Modern Design", href: "" },
                { label: "Classic Design", href: "" },
              ],
            },
            { label: "Elegant Queen-size Bed", href: "" },
          ],
        },
      ],
    },
    {
      category: "Mobile games",
      icon: <MdOutdoorGrill />,
      menu: [
        {
          title: "Outdoor Furniture",
          items: [
            {
              label: "Sleek Italian Outdoor Bed",
              subItems: [
                { label: "Weatherproof", href: "" },
                { label: "Eco-Friendly", href: "" },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Software",
      icon: <TbToolsKitchen3 />,
      menu: [
        {
          title: "Kitchenware",
          items: [
            {
              label: "Gourmet Italian Bed",
              subItems: [
                { label: "Premium Wood", href: "" },
                { label: "Modern Style", href: "" },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Subscriptions",
      icon: <TbToolsKitchen3 />,
      menu: [
        {
          title: "Kitchenware",
          items: [
            {
              label: "Gourmet Italian Bed",
              subItems: [
                { label: "Premium Wood", href: "" },
                { label: "Modern Style", href: "" },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Gift Cards",
      icon: <TbToolsKitchen3 />,
      menu: [
        {
          title: "Kitchenware",
          items: [
            {
              label: "Gourmet Italian Bed",
              subItems: [
                { label: "Premium Wood", href: "" },
                { label: "Modern Style", href: "" },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "E-learning",
      icon: <TbToolsKitchen3 />,
      menu: [
        {
          title: "Kitchenware",
          items: [
            {
              label: "Gourmet Italian Bed",
              subItems: [
                { label: "Premium Wood", href: "" },
                { label: "Modern Style", href: "" },
              ],
            },
          ],
        },
      ],
    },
  ];

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
  };


  const Items = [
    {
      id: 1,
      name: 'Bestsellers',
      Url: '/sellers'
    },
    {
      id: 2,
      name: 'Gift ideas',
      Url: '/gift-ideas'
    },
    {
      id: 3,
      name: 'Random Keys',
      Url: '/random-keys'
    },
    {
      id: 4,
      name: 'Software',
      Url: '/software-dealer'
    }

  ]


  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState([]);

  console.log(subSubCategory);

  useEffect(() => {
    axios
      .get(`${Base_url}/brands/getAll`)
      .then((res) => {
        console.log(res);

        setSubCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });


  }, []);




  return (
    <>
      {/* Top Nav */}
      <nav className="hidden md:block  bg-primary">
        <div className=" max-w-[1170px] mx-auto flex items-center md:px-3 px-0  gap-6  pt-1">
          {/* Categories Button */}


          {/* Nav Links */}
          <div className="flex justify-between relative  w-full items-center gap-2">
            <button
              onClick={toggleDesktopMenu}
              className="flex text-white text-sm bg-[#212121] gap-4 font-semibold items-center w-full uppercase px-12 py-2.5 hover:bg-[rgb(66,66,66)] hover:bg-[rgb(66, 66, 66)] rounded-sm"
            >
              <RxHamburgerMenu className=" w-5 h-5" />
              Categories
            </button>

            {/* Desktop Menu */}
            {desktopMenuOpen && (

              <>

                {selectedCategory ?
                  <div onClick={() => setDesktopMenuOpen(false)} className="fixed cursor-pointer top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-[rgba(0,0,0,0.6)]"></div> : null
                }


                <section className="absolute z-50 left-0 right-0   top-10 h-full ">
                  <div className=" flex">
                    <div className="w-64 overflow-y-auto h-96 bg-white border">
                      <ul className="flex flex-col w-full">
                        {subCategory?.map((category) => (
                          <Link
                            to={`/category/${category._id}`}
                            key={category._id}
                            className={`flex items-center font-normal text-sm gap-2 px-4 py-2.5 cursor-pointer ${selectedCategory === category.midcategories
                                ? "border-t border-b"
                                : "hover:bg-gray-100"
                              }`}
                            onMouseEnter={() => {
                              if (category.midcategories?.length > 0) {
                                setSelectedCategory(category.midcategories);
                                setProductsDetails(category);
                              } else {

                                setSelectedCategory(null);
                                setSubSubCategory([]);
                                setProductsDetails({});
                              }
                            }}
                            onMouseLeave={() => {
                              setProductsDetails({});
                            }}

                          >
                            {category.name}
                            {category.midcategories?.length > 0 && (
                              <LiaAngleRightSolid className="ml-auto" size={12} />
                            )}
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Subcategories */}
                    {selectedCategory && (
                      <div className="flex bg-white  h-96 pt-3 w-72 overflow-y-auto flex-col">
                        {subCategory
                          .find((cat) => cat.midcategories === selectedCategory)
                          ?.midcategories.map((submenu) => (
                            <Link
                              to={`/sub-category/${submenu._id}`}
                              key={submenu._id}
                              onMouseEnter={() => setSubSubCategory(submenu.subcategories)}
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

                    {/* Sub-Subcategories */}
                    {subSubCategory?.length > 0 && (
                      <div className="flex bg-white h-96 pt-3 w-72 overflow-y-auto flex-col">
                        {subSubCategory.map((submenu) => (
                          <Link
                            to={`/sub-sub-category/${submenu._id}`}
                            key={submenu._id} // Use unique key
                            className="px-4 cursor-pointer py-2 flex"
                          >
                            <h3 className="text-sm flex w-full text-gray-700">
                              {submenu.title}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Product Details */}
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

            {Items?.map(
              (item, index) => (
                <Link
                  key={index}
                  className="text-white bg-[#212121] hover:bg-[rgb(66,66,66)] py-2  text-sm rounded-sm w-full text-center"
                  to={`${item?.Url}`}
                >
                  {item?.name}
                </Link>
              )
            )}
            <Link

              className="text-white  bg-[#6202EA] py-2 text-sm rounded-sm w-full text-center   hover:bg-[rgb(113,27,236)]"
              to={'#'}
            >
              Save more with DGMARQ
            </Link>
          </div>

        </div>
      </nav>


    </>
  );
};

export default BottomHeader;
