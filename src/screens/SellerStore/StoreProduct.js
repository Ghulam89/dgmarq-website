
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MdClose } from "react-icons/md";
import ProductCard from "../../components/Cards/ProductCard";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { Link, useParams, useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { IoIosSearch } from "react-icons/io";
import Navbar from "../../components/Header/Navbar";
import BottomHeader from "../../components/Header/BottomHeader";
import Footer from "../../components/Footer/Footer";
import AboutSellerStore from "./AboutSellerStore";

const StoreProduct = () => {
    const { id } = useParams();

    const [activeTab, setActiveTab] = useState('products');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    
    const location = useLocation();
    const history = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        platform: "",
        minPrice: "",
        maxPrice: "",
        type: "",
        region: "",
        categoryId: "",
        title: "",
    });
    const [checkboxFilters, setCheckboxFilters] = useState({
        availability: [],
        region: [],
        platform: [],
        type: [],
        categoryId: [],
    });
    const [layout, setLayout] = useState('listing');
    const [sort, setSort] = useState('');
    const [region, setRegion] = useState([]);
    const [platform, setPlatform] = useState([]);
    const [category, setCategory] = useState([]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const platform = queryParams.get('platform') || "";
        const minPrice = queryParams.get('minPrice') || "";
        const maxPrice = queryParams.get('maxPrice') || "";
        const type = queryParams.get('type') || "";
        const region = queryParams.get('region') || "";
        const categoryId = queryParams.get('categoryId') || "";
        const title = queryParams.get('title') || "";
        const sortParam = queryParams.get('sort') || "";

        setFilters({ platform, minPrice, maxPrice, type, region, title, categoryId });
        setSort(sortParam);
        fetchRegions();
        fetchCategories();
        fetchPlatforms();

        fetchProducts(currentPage, platform, minPrice, maxPrice, type, region, title, sortParam, categoryId);
    }, [location.search, currentPage]);


    const fetchProducts = (page, platform, minPrice, maxPrice, type, region, title, sort, categoryId) => {
        axios.get(`${Base_url}/products/productBySeller/${id}?page=${page}&platform=${platform}&minPrice=${minPrice}&maxPrice=${maxPrice}&type=${type}&region=${region}&title=${title}&sort=${sort}&categoryId=${categoryId}`)
            .then((res) => {
                setProducts(res?.data?.data);
                setTotalPages(res?.data?.pagination?.totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);

        if (filterType === "sort") {
            setSort(value);
        }

        const queryParams = new URLSearchParams();
        Object.entries({ ...newFilters, sort: value }).forEach(([key, val]) => {
            if (val) queryParams.set(key, val);
        });

        history({ search: queryParams.toString() });
    };

    const handleCheckboxChange = (filterType, value) => {
        const newCheckboxFilters = { ...checkboxFilters };
        if (newCheckboxFilters[filterType].includes(value)) {
            newCheckboxFilters[filterType] = newCheckboxFilters[filterType].filter(item => item !== value);
        } else {
            newCheckboxFilters[filterType].push(value);
        }
        setCheckboxFilters(newCheckboxFilters);

        const queryParams = new URLSearchParams(location.search);
        Object.entries(newCheckboxFilters).forEach(([key, val]) => {
            if (val.length > 0) {
                queryParams.set(key, val.join(','));
            } else {
                queryParams.delete(key);
            }
        });
        history({ search: queryParams.toString() });

        fetchProducts(currentPage, filters.platform, filters.minPrice, filters.maxPrice, filters.type, filters.region, filters.title, sort, filters.categoryId);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const fetchRegions = () => {
        axios.get(`${Base_url}/region/getAll`).then((res) => {
            setRegion(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchCategories = () => {
        axios.get(`${Base_url}/subcategory/getbyCategoryId/${id}`).then((res) => {
            setCategory(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchPlatforms = () => {
        axios.get(`${Base_url}/platform/getAll`).then((res) => {
            setPlatform(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };


    const [getSeller, setGetSeller] = useState({});

    console.log(getSeller);
    
    const fetchSellers = () => {
      axios.get(`${Base_url}/seller/get/${id}`)
        .then((res) => {
          console.log(res);
          setGetSeller(res?.data?.data);
  
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      fetchSellers();
    }, [])
  


    return (
        <>
    <Navbar />
    <BottomHeader />
            <div className="max-w-[1170px] px-3 mx-auto pb-10">
            <div className=" mx-auto px-4 py-4 border-b bg-white">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Badge */}
              <div className="mr-4  border-2 relative  border-secondary rounded-full">
                <img
                  src={getSeller?.logo}
                  alt="Best Choice"
                  className="w-24 h-24   object-cover  rounded-full overflow-hidden"
                />
                <div className=" absolute  -top-2 -left-3">
                  <svg width="2.5em" height="2.5em" className=" text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.39 5.544l-.91-1.776-.878 1.792L9.9 9.032l-4.048.608-2.06.309 1.53 1.414 2.923 2.703-.765 3.733-.417 2.034 1.85-.942 3.587-1.826 3.587 1.826 1.85.942-.417-2.034-.765-3.733 2.924-2.703 1.524-1.409-2.052-.314-3.974-.608-1.787-3.488z" fill="currentColor" stroke="#FAFAFA"></path></svg>
                </div>
              </div>
              {/* Seller Details */}
              <div>
                <h1 className="text-xl font-bold text-gray-800">{getSeller?.companyName}</h1>
                <p className="text-sm text-gray-600">EXCELLENT SELLER</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {/* <span>100% Positive feedback</span>
                  <span className="flex items-center">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" css="[object Object]" font-size="16"><path d="M6 22a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2zm1.238-12.19L20 16H6L4 1H1m3.667 5H13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M16.529 4.47a.75.75 0 10-1.06 1.06l2 2a.748.748 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47-1.47-1.47z" fill="currentColor"></path><path d="M23.099 6.02a1 1 0 00-1.18.78 4 4 0 11-3.12-4.72 1 1 0 00.4-1.961 6 6 0 104.68 7.081 1.001 1.001 0 00-.78-1.18z" fill="currentColor"></path></svg>
                    4513
                  </span> */}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <button className="text-blue border border-blue px-4  py-1 text-sm rounded hover:bg-blue  hover:text-white">
              Contact seller
            </button>
          </div>

          {/* Navigation Links */}
      <div className="flex space-x-8 mt-4 text-sm font-medium text-gray-600">
        <button
          onClick={() => handleTabClick('products')}
          className={`text-[12px] border-blue  pb-2 ${
            activeTab === 'products' ? 'border-b-2' : ''
          }`}
        >
          SELLER'S PRODUCTS
        </button>
        <button
          onClick={() => handleTabClick('about')}
          className={`text-[12px] border-blue  pb-2 ${
            activeTab === 'about' ? 'border-b-2' : ''
          }`}
        >
          ABOUT SELLER
        </button>
        {/* <button
          onClick={() => handleTabClick('terms')}
          className={`text-[12px] border-blue  pb-2 ${
            activeTab === 'terms' ? 'border-b-2' : ''
          }`}
        >
          TERMS & CONDITIONS
        </button> */}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'products' && (
          <div>
             <div className="bg-white py-3 z-40 sticky top-0 flex justify-between items-center">
                    <div>
                        <h1 className="text-black font-semibold text-2xl pb-2">Top Up Mobile Games</h1>
                        <h6 className="h6">306,182 listings</h6>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="md:block hidden">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <FaListUl className={`cursor-pointer ${layout === 'listing' ? 'text-secondary' : ''}`} onClick={() => setLayout('listing')} size={25} />
                                </div>
                                <div>
                                    <TfiLayoutGrid3 onClick={() => setLayout('grid')} className={`cursor-pointer ${layout === 'grid' ? 'text-secondary' : ''}`} size={25} />
                                </div>

                                <div className="flex gap-3 items-center">
                                    <p className="m-0 font-semibold text-black">Sort by</p>
                                    <select
                                        value={sort}
                                        onChange={(e) => handleFilterChange('sort', e.target.value)}
                                        className="border py-1 bg-lightGray rounded-md p-2.5 text-primary placeholder:text-primary"
                                    >
                                        <option value="releaseDate-asc">Release date - Oldest</option>
                                        <option value="releaseDate-des">Release date - Newest</option>
                                        <option value="price-asc">Price - Low to High</option>
                                        <option value="price-desc">Price - High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <Button
                            label={"filter"}
                            onClick={toggleMenu}
                            className={"bg-black block md:hidden uppercase text-xs py-1 font-bold text-white"}
                        />
                    </div>
                </div>

                <div className="flex pt-4 gap-12">
                    <div
                        className={`sm:w-3/12 w-8/12 bg-white ${isMenuOpen
                            ? "block fixed text-center lg:p-5 p-0 top-0 right-0 z-50 left-0 w-[70%] h-full bg-white"
                            : "w-[20%] hidden lg:block bg-white"
                            }`}
                    >
                        <div className="p-2 border-t lg:hidden block border-b flex justify-between items-center">
                            <MdClose
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            />
                            <p className="h5">filter</p>
                            <span className="text-gray-500 border-b">Clear All</span>
                        </div>

                        <div className="h-full pb-12 px-4 sm:overflow-y-hidden overflow-y-scroll">
                            {/* <h1 className="text-black font-bold  pb-2">Categories</h1>
                            <ul className="leading-7">
                                {category?.map((item, index) => {
                                    return (
                                        <li className="flex justify-between pb-2 cursor-pointer" key={index}>
                                            <div className=" flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                    checked={checkboxFilters.categoryId.includes(item?._id)}
                                                    onChange={() => handleCheckboxChange("categoryId", item?._id)}
                                                />
                                                <span className=" text-sm hover:underline">{item?.title}</span>
                                            </div>
                                            <span className=" text-sm text-gray-400">6</span>
                                        </li>
                                    )
                                })}
                            </ul> */}

                            <div className="pt-3">
                                <h1 className="text-black font-bold pb-4">Price <span className="font-normal">(USD)</span></h1>
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <input
                                        placeholder="From"
                                        className="border border-gray-200 p-2.5 text-sm outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.minPrice}
                                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                    />
                                    <input
                                        placeholder="To"
                                        className="border border-gray-200 p-2.5 text-sm outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* <div className="pt-5">
                                <h1 className="text-black font-bold  pb-4">Availability</h1>
                                <ul className="flex gap-3 flex-col">
                                    <li className="flex gap-2 ">
                                        <input
                                            type="checkbox"
                                            className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                            checked={checkboxFilters.availability.includes("Pakistan")}
                                            onChange={() => handleCheckboxChange("availability", "Pakistan")}
                                        />
                                        <span className=" text-sm">Items available in <br /> <span className=" text-blue font-semibold">Pakistan</span></span>
                                    </li>
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.availability.includes("In Stock")}
                                                onChange={() => handleCheckboxChange("availability", "In Stock")}
                                            />
                                            <span className=" text-sm">Items in stock</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm">65</span>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="pt-5">
                                <h1 className="text-black font-bold pb-1">Region</h1>
                                <div className=" relative pb-3">
                                    <div className=" absolute left-2 top-3">
                                        <IoIosSearch size={20} className=" text-gray-400" />

                                    </div>
                                    <input
                                        placeholder="Search for Region"
                                        className="border pl-8 text-sm border-gray-200 p-2.5 w-full outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.region}
                                        onChange={(e) => handleFilterChange('region', e.target.value)}
                                    />

                                </div>
                                <ul className="flex gap-3 flex-col">
                                    {region?.map((item, index) => {
                                        return (
                                            <li className="justify-between flex gap-2 items-center" key={index}>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                        checked={checkboxFilters.region.includes(item?._id)}
                                                        onChange={() => handleCheckboxChange("region", item?._id)}
                                                    />
                                                    <span className=" text-sm uppercase">{item?.title}</span>
                                                </div>
                                                <span className=" text-gray-400 text-sm"></span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <hr className="mt-4" />

                            <div className="pt-5">
                                <h1 className="text-black font-bold pb-1">Platform</h1>
                                <div className=" relative pb-3">
                                    <div className=" absolute left-2 top-3">
                                        <IoIosSearch size={20} className=" text-gray-400" />

                                    </div>
                                    <input
                                        placeholder="Search for Platform"
                                        className="border pl-8 text-sm border-gray-200 p-2.5 w-full outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.platform}
                                        onChange={(e) => handleFilterChange('platform', e.target.value)}
                                    />

                                </div>
                                <ul className="flex gap-3 flex-col">
                                    {platform?.map((item, index) => {
                                        return (
                                            <li className="justify-between flex gap-2 items-center" key={index}>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                        checked={checkboxFilters.platform.includes(item?._id)}
                                                        onChange={() => handleCheckboxChange("platform", item?._id)}
                                                    />
                                                    <span className=" text-sm">{item?.title}</span>
                                                </div>
                                                <span className=" text-gray-400 text-sm"></span>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                            <hr className="mt-4" />
                            <div className="pt-5">
                                <h1 className="text-black font-bold pb-3">Type</h1>

                                <ul className="flex gap-3 flex-col">
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Key")}
                                                onChange={() => handleCheckboxChange("type", "Key")}
                                            />
                                            <span className=" text-sm">Key</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>

                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Gift")}
                                                onChange={() => handleCheckboxChange("type", "Gift")}
                                            />
                                            <span className=" text-sm">Gift</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Account")}
                                                onChange={() => handleCheckboxChange("type", "Account")}
                                            />
                                            <span className=" text-sm">Account</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>

                                </ul>
                            </div>
                            <hr className="mt-4" />
                        </div>
                    </div>
                    <div className="sm:w-9/12 w-12/12">
                        {layout === 'listing' ?
                            products?.map((item, index) => {
                                return (
                                    <Link to={`/product-details/${item?._id}`} className="border flex gap-4 p-3" key={index}>
                                        <div className="w-2/12">
                                            <img src={item?.images[0]} className="w-full h-44" alt="" />
                                        </div>
                                        <div className="w-10/12">
                                            <h4 className="font-semibold">{item?.title}</h4>
                                            <div className="flex w-full flex-col pt-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-400">Platform: <b>ReidosCoins</b></span>
                                                    <p className="font-semibold text-lg">${item?.discountPrice}</p>
                                                </div>
                                                <span className="text-sm text-gray-400">Type: <b>Key</b></span>
                                                <span className="text-sm text-gray-400">Region: <b>GLOBAL</b></span>
                                                <span className="text-sm text-gray-400">Can activate in: <b>Pakistan</b></span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <div className="grid item1 mx-auto col-span-2 mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {products?.map((item, index) => {
                                    return (
                                        <ProductCard
                                            key={index}
                                            url={`/product-details/${item?._id}`}
                                            image={item?.images?.[0]}
                                            title={item?.title}
                                            discount={3}
                                            price={item?.discountPrice}
                                            originalPrice={item?.actualPrice}
                                        />
                                    );
                                })}
                            </div>
                        }


                        <div className="flex  justify-end mt-8 gap-4">
                            <Button
                                label="Previous"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className={`bg-black text-white px-4 py-2  rounded-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />
                            <span className="flex items-center">
                                Page {currentPage} of {totalPages}
                            </span>
                            <Button
                                label="Next"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`bg-black text-white px-4 py-2   rounded-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />
                        </div>
                    </div>
                </div>
          </div>
        )}
        {activeTab === 'about' && (
          <AboutSellerStore/>
        )}
        {activeTab === 'terms' && (
          <div>
            <h2>TERMS & CONDITIONS</h2>
            <p>Terms and conditions content goes here.</p>
          </div>
        )}
      </div>
        </div>
               
            </div>

            <Footer/>
            
        </>
    );
};

export default StoreProduct;