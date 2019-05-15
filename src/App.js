import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

//const API_KEY2 = "37aa148f76e98cbf487c5b52950b6c5f";
const API_KEY2 = process.env.REACT_APP_RECIPES_API_KEY;

class App extends Component {
  state = {
    searchName: "",
    recipes: []
  };

  getRecipes = async e => {
    const recipeName = e.target.elements.txtsearch.value;
    e.preventDefault();
    let API_URL = `https://www.food2fork.com/api/search?key=${API_KEY2}&q=${recipeName}&count=21`;
    const api_call = await fetch(API_URL);
    console.log(`Getting from Server API data for ${recipeName}.....`);

    const Aapi_Results = await api_call.json();
    //console.log(Aapi_Results);
    this.setState({ searchName: recipeName, recipes: Aapi_Results.recipes });
  };

  componentDidUpdate = () => {
    const inRecipes = JSON.stringify(this.state.recipes);
    console.log("componentDidUpdate => inRecipes : ==> ", inRecipes);
    if (inRecipes) {
      localStorage.setItem("recipes", inRecipes);
      localStorage.setItem("searchName", this.state.searchName);
    }
  };

  componentDidMount = () => {
    const outRecipes = localStorage.getItem("recipes");
    console.log("componentDidMount => inRecipes : ==> ", outRecipes);
    if (outRecipes) {
      console.log(
        "componentDidMount => inRecipes : ==> If condistion",
        outRecipes
      );
      this.setState({
        searchName: localStorage.getItem("searchName"),
        recipes: JSON.parse(outRecipes)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipes={this.getRecipes} />
        {this.state.recipes && (
          <Recipes
            recipes={this.state.recipes}
            searchName={this.state.searchName}
          />
        )}
        <hr />
        <footer class="ct-footer">
          <div class="container" />
          &copy; & &#153; code is copy rights for{" "}
          {process.env.REACT_APP_RECIPES_DEV_NAME}
        </footer>
      </div>
    );
  }
}

export default App;
