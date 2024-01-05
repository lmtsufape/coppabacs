import React from "react";
import NewFarmerForm from "@/components/NewFarmerForm/indexOne";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";

export default function NewRegisterFarmer() {
    return (
        <div>
            <Header />
            <div>
                <NewFarmerForm />
            </div>
            <Footer />
        </div>
    );
}