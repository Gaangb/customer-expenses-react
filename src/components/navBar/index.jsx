import { useNavigate, useParams } from "react-router-dom";
import { useCustomer } from "../../hooks/CustomerHooks";
import logoZenze from "../../assets/logoZenze.svg";
import "./style.css";

export default function NavBar() {
  const { isLogged, setIsLogged, expenses, setExpenses } = useCustomer();
  const navigate = useNavigate();
  let { id } = useParams();
  let userId = id

  let loggedInUser = null;
    // Recupera as informações do usuário do Local Storage
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    if (loggedInUserJSON) {
      loggedInUser = JSON.parse(loggedInUserJSON);
      setIsLogged(true)
      // Faça o que for necessário com os dados do usuário logado
      console.log(loggedInUser);
    }
  
  //console.log("otaID: ", id)

  function handleNavigateToCustomer(userId) {
    setIsLogged(true);
    navigate(`/customer/${userId}`);
  }

  function handleNavigateToSumary(userId) {
    setIsLogged(true);
    navigate(`/summary/${userId}`);
  }

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    navigate('/');
    setExpenses([]);
    setIsLogged(false);
  }

  function renderNavButtons() {
    if (!isLogged) {
      return null;
    }
    return (
      <div className="navButtons">
        <button type="button" onClick={() => handleNavigateToCustomer(loggedInUser.id)}>Registro</button>
        <button type="button" onClick={() => handleNavigateToSumary(loggedInUser.id)}>Resumo</button>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="buttonLogo">
      <img src={logoZenze} alt="" />
      {renderNavButtons()}
    </div>
  );
}
