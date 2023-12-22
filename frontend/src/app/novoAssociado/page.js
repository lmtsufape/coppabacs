import React from "react";
import NewFarmerForm from "@/components/NewFarmerForm/IndexOne";
import Footer from "@/components/Home/Footer";

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