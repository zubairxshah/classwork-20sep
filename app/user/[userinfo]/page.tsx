import Heading from "@/app/components/heading";
import React from "react";
import UserList from "../page";
import Link from "next/link";
interface UserListProps{
 name:string;
 username:string;
 age:number;
 email:string;
 phone:string;
 company:{
    name:string;
    bs:string
 }
}
const UserInfo = async({params}:{params: {userinfo:UserListProps}})=>{
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userinfo}`);
    const response = await fetchData.json();
    console.log(response.name);
    return(
        <>
        <Heading text="User's Details"/>
        <ol>
            <p>ID: {response.id}</p>
            <p>Name: {response.name}</p>
            <p>Username: {response.username}</p>
            <p>Email: {response.email}</p>
            <p>Phone: {response.phone}</p>
            <p>Company Name: {response.company.name}</p>
            <p>Company BS: {response.company.bs}</p>
        </ol>
        <div className="mt-4 text-xl text-blue-600 hover:text-blue-800">
            <Link href="/user">Back to User List</Link>
        </div>

        </>
    )
}

export default UserInfo;