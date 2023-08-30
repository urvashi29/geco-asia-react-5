import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Recipe.css";
import data from "./data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "20px",
  color: theme.palette.text.secondary,
}));

function searchFor(term) {
  return function (x) {
    return (
      x.strCategory.toLowerCase().includes(term.toLowerCase()) ||
      x.strCategoryDescription.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}

const Recipe = () => {
  const [term, setTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        id="recipe"
        type="text"
        label="Search"
        placeholder="Search Recipe..."
        style={{ marginTop: "20px" }}
        onChange={handleChange}
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {recipes.filter(searchFor(term)).map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.idCategory}>
            <Item>
              <img src={item.strCategoryThumb} className="recipeImage" />
              <p>{item.strCategory}</p>
              <p>{item.strCategoryDescription.slice(0, 10)}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Recipe;
