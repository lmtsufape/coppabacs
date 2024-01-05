"use client"
import React from "react";
import NewFarmerRuralActivity from "@/components/NewFarmerForm/indexThree";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header"


export default function NewRegisterFarmerSocialData() {
    return (
        <div>
            <Header />
            <div>
                <NewFarmerRuralActivity />
            </div>
            <Footer />
        </div>
    );
}