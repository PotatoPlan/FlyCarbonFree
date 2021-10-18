import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import LostPage from "./components/LostPage";
import Calculator from "./components/Calculator";
import Comparison from "./components/Comparison";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Disclaimer from "./components/Disclaimer";
import "./App.css";
import CalculateResult from "./components/CalculateResult";
import { offsetPrograms } from "./data/offsetPrograms";
import LearnCarbonEmissions from "./components/LearnCarbonEmissions";
import LearnCarbonFootprint from "./components/LearnCarbonFootprint";
import LearnReduce from "./components/LearnReduce";
import Balancer from "./components/Balancer";
import BalancerResult from "./components/BalancerResult";

// import axios from "axios";

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  // const [offPrograms, setOffPrograms] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       "THE API KEY"
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       setOffPrograms(response.data);
  //     });
  // }, []);

  return (
    <div className={"app " + location}>
      {/* Define the components and path of each route */}
      <NavigationBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={LearnCarbonEmissions} path="/LearnCarbonEmissions" />
        <Route component={LearnCarbonFootprint} path="/LearnCarbonFootprint" />
        <Route component={LearnReduce} path="/LearnReduce" />
        <Route component={Calculator} path="/Calculator" />
        <Route component={CalculateResult} path="/CalculateResult" />
        <Route component={Balancer} path="/Balancer" />
        <Route component={BalancerResult} path="/BalancerResult" />
        {/* Need to use render instead of component to pass a prop */}
        <Route
          render={() => <Comparison programs={offsetPrograms} />}
          path="/Comparison"
        />
        <Route component={AboutUs} path="/AboutUs" />
        <Route component={Disclaimer} path="/Disclaimer" />
        <Route component={LostPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
