import SearchUser from "./search_user";
import DeleteUser from "./delete_user_component";
import { useState } from "react";
function User(){
const dataUsers = [
    {
        id:1,
        userName: "Hoang Dieu",
        email: "abc0901@gmail.com",
        role: "admin",
        createDate: "11/11/2024",
        status: true,
    },
    {
        id:2,
        userName: "Trung Nghia",
        email: "abc0901@gmail.com",
        role: "admin",
        createDate: "11/11/2024",
        status: true,
    },
    {
        id:3,
        userName: "Xuan Trieu",
        email: "abc0901@gmail.com",
        role: "admin",
        createDate: "11/11/2024",
        status: true,
    },
    {
        id:4,
        userName: "Manh Quyet",
        email: "abc0901@gmail.com",
        role: "admin",
        createDate: "11/11/2024",
        status: true,
    },
    ];
    let [users, setUsers] = useState(dataUsers);
    function deleteUser(index){
    let isDelete = confirm("Sure?")
    if(isDelete){
        users.splice(index,1);
        setUsers([...users]);
    }
    
    }
    function searchUser(keyword){
    let Tim = dataUsers.filter((item)=> item.userName.toLowerCase().includes(keyword.toLowerCase()))
    setUsers(Tim);
    console.log(Tim);

    }
    let datas = users.map((item, index,keyword) => {
    return <DeleteUser deleteUser={deleteUser}  key={index} {...item}  />;
    });
    
    

    return (
    <>
     <div className="relative overflow-x-auto">
    <SearchUser searchUser={searchUser}/>
    <br />
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            User Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3">
            Create Date
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
)
};
export default User;