import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const clickHandler = (event) => {
    console.log(event.target.value);
    const field = event.target.name;

    switch (field) {
      case "name":
        setFormValues({ ...formValues, name: event.target.value });
        break;
      case "cuisine":
        setFormValues({ ...formValues, cuisine: event.target.value });
        break;
      case "photo":
        setFormValues({ ...formValues, photo: event.target.value });
        break;
      case "ingredients":
        setFormValues({ ...formValues, ingredients: event.target.value });
        break;
      case "preparation":
        setFormValues({ ...formValues, preparation: event.target.value });
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formValues);
    setFormValues(initialState);
    console.log("submitted");
  };

  return (
    <form onSubmit={submitHandler} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  onChange={clickHandler}
                  value={formValues.name}
                  type="text"
                  id="name"
                  name="name"
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  onChange={clickHandler}
                  value={formValues.cuisine}
                  type="text"
                  id="cuisine"
                  name="cuisine"
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  onChange={clickHandler}
                  value={formValues.photo}
                  type="text"
                  id="photo"
                  name="photo"
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  onChange={clickHandler}
                  value={formValues.ingredients}
                  id="ingredients"
                  name="ingredients"
                ></textarea>
              </label>
            </td>
            <td>
              <label htmlFor="perparation">
                <textarea
                  onChange={clickHandler}
                  value={formValues.preparation}
                  id="preparation"
                  name="preparation"
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
