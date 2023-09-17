import logoZenze from "../../assets/logoZenze.png";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";

export default function NavBar() {
  const { isLogged, setIsLogged } = useCustomer();

    function renderNavButtons(){
        if(!isLogged){
            return null
        }
        return(
          <div className="navButtons">
            <button type="button">Registro</button>
            <button type="button">Resumo</button>
            <button type="button">Sair</button>
          </div>
        )
    }

  return (
    <div className="buttonLogo">
      <img src={logoZenze} alt="" />
      {renderNavButtons()}
    </div>
  );
}
