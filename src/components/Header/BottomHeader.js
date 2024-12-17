import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutdoorGrill } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";

const BottomHeader = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
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


  const Items =[
    {
      id:1,
      name:'Bestsellers',
      Url:'/sellers'
    },
    {
      id:2,
      name:'Gift ideas',
      Url:'/shop'
    },
    {
      id:3,
      name:'Random Keys',
      Url:'/'
    },
    {
      id:4,
      name:'Software',
      Url:'/'
    }

  ]


  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${Base_url}/category/getAll`)
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
        <div className="container mx-auto flex items-center  gap-6 h-14">
          {/* Categories Button */}
          

          {/* Nav Links */}
          <div className="flex justify-between  w-full items-center gap-8">
          <button
            onClick={toggleDesktopMenu}
            className="flex text-white text-sm gap-4 font-semibold items-center w-full uppercase px-7 py-2.5 bg-[#212121] rounded-md"
          >
            <RxHamburgerMenu className=" w-5 h-5" />
            Categories
          </button>
            {Items?.map(
              (item, index) => (
                <Link
                  key={index}
                  className="text-white bg-[#212121] py-2 rounded-md w-full text-center hover:border-b  hover:text-[#EAE5D5]"
                  to={`${item?.Url}`}
                >
                  {item?.name}
                </Link>
              )
            )}
             <Link
                
                  className="text-white  bg-secondary py-2 rounded-md w-full text-center hover:border-b  hover:text-[#EAE5D5]"
                  to={'#'}
                >
                  Save more with G2A Plus
                </Link>
          </div>

        </div>
      </nav>

      {/* Desktop Menu */}
      {desktopMenuOpen && (
        <section className="absolute z-50 left-0 right-0 bg-white border">
          <div className="container mx-auto flex py-5">
            {/* Categories List */}
            <div className="w-1/4 border-r">
              <ul className=" flex justify-between flex-col w-full">
                {subCategory?.map((category, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                      selectedCategory === category.category
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onMouseEnter={() => setSelectedCategory(category.category)}
                    onMouseLeave={() => setHoveredSubMenu(null)}
                  >
                   
                    {category.title}
                    <IoMdArrowDropright className="ml-auto" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            {selectedCategory && (
              <div className="w-3/4 flex">
                {categories
                  .find((cat) => cat.category === selectedCategory)
                  ?.menu.map((submenu, index) => (
                    <div key={index} className="px-4">
                      <h3 className="font-semibold text-gray-700">
                        {submenu.title}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {submenu.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="relative group"
                            onMouseEnter={() => setHoveredSubMenu(item.label)}
                            onMouseLeave={() => setHoveredSubMenu(null)}
                          >
                            <a
                              href={item.href}
                              className="block px-2 py-1 hover:bg-gray-100"
                            >
                              {item.label}
                            </a>

                            {/* Sub-subcategories */}
                            {hoveredSubMenu === item.label &&
                              item.subItems && (
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

            {/* Close Button */}
            <button
              onClick={closeSubMenu}
              className="absolute top-3 right-3 text-gray-700"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default BottomHeader;
