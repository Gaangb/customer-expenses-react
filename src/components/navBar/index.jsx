import { useNavigate } from "react-router-dom";
import { useCustomer } from "../../hooks/CustomerHooks";
import logoZenze from "../../assets/logoZenze.svg";
import "./style.css";

export default function NavBar() {
  const { isLogged, setIsLogged, setExpenses } = useCustomer();
  const navigate = useNavigate();

  let loggedInUser = null;

  const loggedInUserJSON = localStorage.getItem("loggedInUser");

  if (loggedInUserJSON) {
    loggedInUser = JSON.parse(loggedInUserJSON);
    setIsLogged(true)
  }
  
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
