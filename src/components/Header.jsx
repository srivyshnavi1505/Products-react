import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="bg-gradient-to-r from-red-200 to-red-300 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <img
          src="https://s.tmimgcdn.com/scr/1200x750/288000/logo-design-for-e-commerce-website-or-e-business-concept-for-smartphone-and-shop_288014-original.jpg"
          alt="Logo"
          className="w-20 rounded-2xl mb-2 md:mb-0"
        />

        {/* Menu Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-cyan-950">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-red-900 p-2" : "p-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? "text-red-900 p-2" : "p-2"
              }
            >
              ProductsList
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contactus"
              className={({ isActive }) =>
                isActive ? "text-red-900 p-2" : "p-2"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;