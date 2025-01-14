import {Link} from "react-router-dom"
function ItemHome({productName,image,price,rate}){
    return(
        <>
  {/* component */}
  {/* This is an example component */}
  <div className="group relative f1 ">
  <div className="aspect-h-1 gucci aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
    <img
      
      src={image}
      alt="Black machined steel pen with hexagonal grip and small white logo at top."
      className="h-full  w-full object-cover object-center group-hover:opacity-75"
    />
  </div>
  <div className="mt-6">
    <p className="text-sm text-gray-500">{rate}</p>
    <h3 className="mt-1 font-semibold text-gray-900">
      <a href="/detail">
        <span className="absolute inset-0" />
        {productName} 
      </a>
    </h3>
    <p className="mt-1 text-gray-900">${price}</p> 
  </div>
  </div>
</>

    )
}export default ItemHome;