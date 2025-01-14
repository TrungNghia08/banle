import User from "./user_component";
import Footer from "../../../layouts/footer";
import Header from "../../../layouts/header";

function AdminUser(){
    return <>
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ padding: "20px", minHeight: "50vh" }}>
        <User />
      </div>
      <Footer />
    </div>
    </>
}
export default AdminUser;