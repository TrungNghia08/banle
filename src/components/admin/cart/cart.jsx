import Footer from "../../../layouts/footer";
import Header from "../../../layouts/header";
import CartCom from "./cart_com";

function CartAd(){
    return(
        <div>
            <div style={{ width: "100%" }}>
      <Header />
      <div style={{ padding: "20px", minHeight: "50vh" }}>
        <CartCom />
      </div>
      <Footer />
    </div>
           

        </div>
    )
}
export default CartAd;