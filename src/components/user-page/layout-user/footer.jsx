function FooterUser(){
    return (
        <>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <footer className="relative bg-blueGray-200 pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">
          Laluz parfums
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Hãy tìm chúng tôi trên bất kỳ nền tảng nào trong số này,
           chúng tôi sẽ phản hồi trong vòng 1-2 ngày làm việc.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button
              className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square" />
            </button>
            <button
              className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-dribbble" />
            </button>
            <button
              className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                liên kết 
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=njs-profile"
                  >
                    Về chúng tôi 
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=njs-profile"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=njs-profile"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                  >
                    Sản phẩm free 
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Tài nguyên khác 
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=njs-profile"
                  >
                   Điều khoản &amp; Tình trạng 
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=njs-profile"
                  >
                    Chính sách bảo mật 
                  </a>
                </li>
                <li>
                  <a
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                  >
                    Liên hệ với chúng tôi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2025</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              {" "}
              Notus JS by
            </a>
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              className="text-blueGray-500 hover:text-blueGray-800"
            >
             Nghĩa
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

    )
}
export default FooterUser;