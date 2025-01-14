import Home from "./home_component";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";

function HomeAdmin(){
    return (
        <>
        <div style={{ width: "100%" }}>
      <Header />
      <div style={{ padding: "20px", minHeight: "50vh" }}>
        <Home />
      </div>
      <Footer />
    </div>
    </>
    )
}
export default HomeAdmin;