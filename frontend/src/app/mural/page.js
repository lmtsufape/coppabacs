import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Mural from "@/components/Mural/index";
import { disconnect } from "process";

export default function muralPage() {
    return (
        <div>
            <Header />
            <Mural />
            <Footer />
        </div>
    )
}