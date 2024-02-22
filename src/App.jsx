import { Autocomplete, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './App.css';
import { makeRecipe } from './utils/Recetas';
import { useState } from 'react';

function App() {
  const [recipe, setRecipe] = useState({});
  const [recipeSelection, setRecipeSelection] = useState({
    cake: undefined,
    portions: undefined,
  });

  useState(() => {
    console.log({ recipeSelection });
    if (
      recipeSelection.cake === undefined ||
      recipeSelection.portions === undefined
    ) {
      return;
    }
    const recipeResult = makeRecipe(
      recipeSelection.cake,
      recipeSelection.portions
    );
    console.log({ recipeResult });
  }, [recipeSelection]);

  const handleSelection = (event, value) => {
    if (value === null) {
      setRecipeSelection({ ...recipeSelection, cake: undefined });
      return;
    }
    console.log(value);
    setRecipeSelection({
      ...recipeSelection,
      cake: value.cake,
    });
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    const newRecipeSelection = {
      ...recipeSelection,
      [name]: value,
    };
    console.log({ newRecipeSelection });
    setRecipeSelection(newRecipeSelection);
  };

  return (
    <Container
      sx={{
        height: '100vh',
      }}>
      <Grid container spacing={'1rem'} sx={{ paddingTop: '20px' }}>
        <Grid xs={12}>
          <Autocomplete
            disablePortal
            getOptionLabel={(option) => option.label}
            id='combo-box-demo'
            name='cake'
            onChange={handleSelection}
            options={[{ label: 'Chocolate', cake: 'chocolate' }]}
            renderInput={(params) => <TextField {...params} label='Pastel' />}
            sx={{ width: 300 }}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            onChange={handleChange}
            id='outlined-basic'
            name='portions'
            label='Molde'
            variant='outlined'
          />
        </Grid>
        <Grid xs={12}>
          <TextField id='outlined-basic' label='Molde' variant='outlined' />
        </Grid>
      </Grid>
      {JSON.stringify(recipe)}
    </Container>
  );
}

export default App;
