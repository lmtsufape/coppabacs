"use client"
import React from "react";
import NewFarmerFormSocialData from "@/components/NewFarmerForm/IndexTwo";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header"


export default function NewRegisterFarmerSocialData(){
    return(
        <div>
            <Header/>
            <div>
            <NewFarmerFormSocialData/>
            </div>
            
            <Footer/>
        </div>
    );
}