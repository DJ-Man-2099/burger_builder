import React from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.Main}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
