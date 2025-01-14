import { useState } from "react";
import ItemHome from "./item_home"

function HomePages(){
     const homeProduct = [
        {
            id: 1,
            productName: "Gucci Bloom",
            image :"https://laluz.vn/wp-content/uploads/2024/02/Untitled-1_0000_gucci-bloom-ambrosia-di-fiori-eau-de-parfum-for-her_828f5e3f20f047098b0c3dab2f99e905_master-Photoroom.pn_.png",
            price: 35000,
            cate: 'hot',
            rate: 2
        },
        {
            id: 1,
            productName: "Gucci Guilty",
            image :"https://laluz.vn/wp-content/uploads/2024/02/Untitled-1456546.png",
            price: 26000,
            cate: 'hot',
            rate: 3,
        },
        {
            id: 1,
            productName: "Gucci Bloom EDG",
            image :"https://laluz.vn/wp-content/uploads/2023/12/om-eau-de-parfum-for-her-100ml-391f58375b274745b6f087386a8e4197-master-ea41da5d35f944f3bae082d8ca16c720-master-photoroom-png-photoroom.png",
            price: 32000,
            cate: 'hot',
            rate: 4
        },
        {
            id: 4,
            productName: "Gucci",
            image :"https://laluz.vn/wp-content/uploads/2023/12/untitled-1-0000-layer-2.png",
            price: 45000,
            cate: 'hot',
            rate: 4
        },

        {
          id: 1,
          productName: "Set Gucci flora",
          image :"https://laluz.vn/wp-content/uploads/2024/02/tai-xuong.jpeg",
          price: 58000,
          cate: 'new',
          rate: 2
      },
      {
          id: 1,
          productName: "Set Gucci Guilty",
          image :"https://laluz.vn/wp-content/uploads/2024/02/10.png",
          price: 26000,
          cate: 'new',
          rate: 3,
      },
      {
          id: 1,
          productName: "Set Gucci Bloom EDG",
          image :"https://laluz.vn/wp-content/uploads/2023/12/134124124.png",
          price: 62000,
          cate: 'new',
          rate: 4
      },
      {
          id: 4,
          productName: "Set Gucci Rose",
          image :"https://laluz.vn/wp-content/uploads/2023/12/guccii1-photoroom-png-photoroom-1.png",
          price: 65000,
          cate: 'new',
          rate: 4
      }

    ];
    let hotProduct = homeProduct.filter(item => item.cate === 'hot');
    
    let hotdata = hotProduct.map((item,index)=>{
        return <ItemHome   key={index}{...item}/>
        
    })
    let newProduct = homeProduct.filter(item => item.cate === 'new');
    
    let newdata = newProduct.map((item,index)=>{
        return <ItemHome   key={index}{...item}/>
        
    })
    return (
      <>
      {/* component */}
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              
Sản phẩm thịnh hành
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-teal-600 hover:text-cyan-500 sm:block"
            >
              Xem mọi thứ
              <span aria-hidden="true"> →</span>
            </a>
          </div>
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                <li className="inline-flex w-64 text-center lg:w-auto contents">
                    {hotdata}
                </li>

                {/* More products... */}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex px-4 sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Xem mọi thứ
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>


      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Sản phẩm nổi bật 
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-teal-600 hover:text-cyan-500 sm:block"
            >
              Xem mọi thứ 
              <span aria-hidden="true"> →</span>
            </a>
          </div>
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                <li className="inline-flex w-64 text-center lg:w-auto contents">
                    {newdata}
                </li>

                {/* More products... */}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex px-4 sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Xem mọi thứ
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>
    </>
    

    )
}
export default HomePages;