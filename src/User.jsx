import { Outlet } from "react-router-dom";
import HeaderUser from './components/user-page/layout-user/header';
import FooterUser from "./components/user-page/layout-user/footer";

function UserPages(){
    return <>
    <HeaderUser/>
    <Outlet/>
    <FooterUser/>
    </>
}
export default UserPages;