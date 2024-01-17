import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import FormularioAssociado1 from "@/components/NewFarmerForm/IndexOne";
import FormularioAssociado2 from "@/components/NewFarmerForm/IndexTwo";
import FormularioAssociado3 from "@/components/NewFarmerForm/indexThree";

export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <FormularioAssociado1 />
      <FormularioAssociado2 />
      <FormularioAssociado3 />
      <Footer />

    </div>
  )
}