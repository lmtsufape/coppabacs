
import ListAgricultores from "@/components/ListAgricultores";
import styles from "@/app/agricultores/agricultores.module.scss";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import PerfilUsuario from "@/components/PerfilUsuario";
export default function perfilPage() {

  return (
    <div>
        <PerfilUsuario
          diretorioAnterior="Home /"
          hrefAnterior="/"
        />

    </div>
  )
}