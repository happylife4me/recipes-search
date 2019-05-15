import React from "react";

import { Link } from "react-router-dom";

import Router from "./Router";

/*
const Recipe = () => {
  return <div>I'm from Recipe</div>;
};
*/

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const recipe = this.props.location.state.selectedRecipe;
    /* const API_KEY1 = "37aa148f76e98cbf487c5b52950b6c5f";
    let API_URL1 = `https://www.food2fork.com/api/search?key=${API_KEY1}&q=${
      recipe.title
    }`;
    const api_call1 = await fetch(API_URL1);
    console.log(`Getting from Server API data for ${recipe.title}.....`);

    const Api_Results = await api_call1.json();
    console.log(Api_Results);
    */
    this.setState({ activeRecipe: recipe });
  };

  render() {
    const tmpRecipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={tmpRecipe.image_url}
              alt={tmpRecipe.title}
            />
            <h3 className="active-recipe__title">tmpRecipe.title</h3>
            <h4 className="active-recipe__publisher">
              publisher:<span>tmpRecipe.publisher</span>
            </h4>
            <p className="active-recipe__website">
              WebSite:
              <span>
                <a href={tmpRecipe.publisher_url}>{tmpRecipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="../" component={Router}>
                Back To Home
              </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
