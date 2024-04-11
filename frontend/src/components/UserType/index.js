import Header from "@/components/Home/Header";
import Footer from "../Home/Footer"
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";
import { useRouter } from "next/navigation";

const UserType = (props) => {
    const router = useRouter();

    function whatIsTypeUser(){
        if(props.user == "Admin"){
            return <LayoutAdmin></LayoutAdmin>
        }else if(props.user == "user"){
            return <div>Layout User</div>
        }else{
            return <div>Layout default</div>
        }
    }    

    return(
        <div>
            {whatIsTypeUser()}
        </div>
    )

}


const LayoutAdmin = () =>{

    return(
        <div>
        </div>
    )
}