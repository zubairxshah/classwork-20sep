import Heading from "../components/heading";
import React from "react";
import Link from "next/link";

interface UserListProps{
 id:number
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
const UserList = async()=>{
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetchData.json();
    console.log(response[0]);
    return(
        <>
        <Heading text="User List"/>
        <ol>
            {response.map((user:UserListProps, i:number)=>(
                <li className="mt-4 text-md text-blue-600 hover:text-blue-800" key={i}><Link href={`user/${user.id}`}>{user.name}</Link></li>
            ))}
        </ol>
        </>
    )
}

export default UserList;