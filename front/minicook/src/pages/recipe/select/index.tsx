import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { produce } from "immer";
import SelectButton from "../../../components/selectButton";

const RecipeSelect = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleSelectedIngredient = useCallback(
    (ingredientName: string) => {
      //const ingredient = e.target
      setSelectedIngredients((prev) =>
        produce(prev, (draft) => {
          const index = draft.indexOf(ingredientName);
          if (index == -1) {
            draft.push(ingredientName);
          } else {
            draft.splice(index, 1);
          }
        })
      );
    },
    [selectedIngredients]
  );

  return (
    <RecipeSelectWrapper>
      <SelectButton onSelect={handleSelectedIngredient} />
      {/*<SelectdButtonList onSelect={handleSelectedIngredient} />
      <RecipeSelect selected={selectedIngredients} />*/}
    </RecipeSelectWrapper>
  );
};

const RecipeSelectWrapper = styled.div`
background-color: #F4F1EB;
width:100%;
height: 75vh;
padding: 3rem 30% 8rem 30%;
`;

export default RecipeSelect;
