import React from "react";
import NewFarmerForm from "@/app/components/NewFarmerForm/IndexOne";
import Footer from "@/app/components/Footer/Index.js";

export default function NewRegisterFarmer(){
    return(
        <div>
            <div>
            <NewFarmerForm/>
            </div>
            <Footer/>
        </div>
    );
}