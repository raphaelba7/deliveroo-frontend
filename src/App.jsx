import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import Meals from "./components/Meals";
import Restaurants from "./components/Restaurants";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  /*  Première utilisation du useEffect.
    // Fonction de fetchData
   const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      //console.log(response.data);
      // Je stocke la réponse du serveur dans le state data
      setData(response.data);
      // Je fais passer isLoading à false
      setIsLoading(false);
    
    // Utilisation du useEffect avec le fetchData
    useEffet(() =>{
      fetchData;
    }, []);
  */

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      //console.log(response.data);
      // Je stocke la réponse du serveur dans le state data
      setData(response.data);
      // Je fais passer isLoading à false
      setIsLoading(false);
    };
    // J'appelle cette focntion directement après l'avoir déclarée
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loadingMessage">
      <span>En cours de chargement...</span>
    </div>
  ) : (
    <>
      <Header />
      <div className="white-bg">
        <div className="container">
          <Restaurants data={data} />
        </div>
      </div>
      <div className="container gray-bg">
        <div className="allContent-restaurant">
          <Meals data={data} basket={basket} setBasket={setBasket} />
          <Basket basket={basket} setBasket={setBasket} data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
