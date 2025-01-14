import SearchForm from "./search";
import ItemProduct from "../product/item_product";
import { useState } from "react";
function Product() {

  const data = [
    {
      name: "Gucci Bloom",
      color: "red",
      category: "Gucci",
      price: "2000$",
      status: true,
    },
    {
      name: "Gucci Guitly",
      color: "black",
      category: "Gucci",
      price: "2000$",
      status: true,
    },
    {
      name: "Gucci EDG",
      color: "orange",
      category: "Gucci",
      price: "2000$",
      status: true,
    },
    {
      name: "Gucci",
      color: "blue",
      category: "Gucci",
      price: "2000$",
      status: true,
    },
  ];
  let [products, setProducts] = useState(data);
  function Xoa(index){
    let isDelete = confirm("Sure?")
    if(isDelete){
      products.splice(index,1);
      setProducts([...products]);
    }
   
    }
  function Search(keyword){
    let search = data.filter((item)=> item.name.toLowerCase().includes(keyword.toLowerCase()))
    setProducts(search);

  }
  let datas = products.map((item, index,keyword) => {
    return <ItemProduct Xoa={Xoa}  key={index} {...item}  />;
  });

  return (
    <>
      <div className="relative overflow-x-auto">
        <SearchForm Search={Search} />
        <br />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{datas}</tbody>
        </table>
      </div>
    </>
  );
}

export default Product;
