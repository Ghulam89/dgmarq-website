import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <img
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link to="/" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          <Link to="/shop" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link to="/deals" onClick={() => setOpen(false)}>
            Deals
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/logout" onClick={() => setOpen(false)}>
            Logout
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)}>
            Cart(1)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
