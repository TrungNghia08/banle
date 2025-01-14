import {Link} from "react-router-dom"
function HeaderUser(){
    return (
        <>
  {/* component */}
  <>
  {/* source https://github.com/spacemadev/Free-blue-star-tailwind-landing-page-template */}
  <header className="bg-gray-500 sticky top-0 z-50 px-4">
    <div className="container mx-auto flex justify-between items-center py-4">
      {/* Left section: Logo */}
      <div className="flex items-center">
        <img
          src="https://laluz.vn/wp-content/uploads/2024/06/cropped-logo-laluz-new.png"
          alt="Logo"
          className="h-14 w-auto mr-4"
        />
      </div>
      {/* Hamburger menu (for mobile) */}
      <div className="flex md:hidden">
        <button id="hamburger" className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Center section: Menu */}
      <nav className="hidden md:flex md:flex-grow justify-center">
        <ul className="flex justify-center space-x-4 text-white">
          <li>
            <a href="#home" className="hover:text-secondary font-bold">
            <Link to="">Trang chủ</Link>
            </a>
          </li>
          <li>
            <a href="#aboutus" className="hover:text-secondary font-bold">
            <Link to="/product">Sản Phẩm</Link>
            </a>
          </li>
          <li>
            <a href="#results" className="hover:text-secondary font-bold">
            <Link to="/detail">Chi tiết</Link>
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-secondary font-bold">
            <Link to="/cart">Giỏ hàng </Link>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-secondary font-bold">
            <Link to="/checkout">Thanh toán</Link>
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-secondary font-bold">
            <Link to="/contact">Liên hệ</Link>
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary font-bold">
              
            </a>
          </li>
        </ul>
      </nav>
      {/* Right section: Buttons (for desktop) */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="#"
          className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
        >
         <Link to="/login">Đăng nhập</Link>
        </a>
        <a
          href="#"
          className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
        >
          <Link to="/register">Đăng ký </Link>
        </a>
      </div>
    </div>
  </header>
  {/* Mobile menu */}
  <nav
    id="mobile-menu-placeholder"
    className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8"
  >
    <ul className="w-full text-center">
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#home" className="hover:text-secondary font-bold">
          Home
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#aboutus" className="hover:text-secondary font-bold">
          About us
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#results" className="hover:text-secondary font-bold">
          Results
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#reviews" className="hover:text-secondary font-bold">
          Reviews
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#portfolio" className="hover:text-secondary font-bold">
          Portfolio
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#team" className="hover:text-secondary font-bold">
          Team
        </a>
      </li>
      <li className="pb-4 pt-4">
        <a href="#contact" className="hover:text-secondary font-bold">
          Contact
        </a>
      </li>
    </ul>
    <div className="flex flex-col mt-6 space-y-2 items-center">
      <a
        href="#"
        className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
      >
        Login
      </a>
      <a
        href="#"
        className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
      >
        Regiter
      </a>
    </div>
  </nav>
</>


<div className="relative w-full h-[320px]" id="home">
  <div className="absolute inset-0 opacity-70">
    <img
      src="https://theperfume.vn/wp-content/uploads/2013/12/banner-nuoc-hoa-chanel.jpg"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
  </div>
  <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-4 md:mb-0">
      <h1 className="text-white-700 fl text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
        Laluz parfums
      </h1>
      <p className="font-regular fl text-white text-xl mb-8 mt-4">
      cửa hàng nước hoa LALUZ 
      </p>
      <a
        href="#contactUs"
        className="px-6 py-3 bg-[gray] fl  text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
      >
        Liên hệ 
      </a>
    </div>
  </div>
</div>

</>
    )
    
}
export default HeaderUser;

