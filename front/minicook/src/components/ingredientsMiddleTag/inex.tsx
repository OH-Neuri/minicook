import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface RecipeSelectTagProps {
  selectedIngredients: string[];
  onToggle: (ingredientName: string) => void;
}

/**
 * IngredientsMiddleTag 컴포넌트
 *
 * 레시피 선택 페이지에서 사용자가 선택한 재료를 태그로 보여줍니다.
 * @prop {string[]} selectedIngredients - 사용자가 선택한 재료 배열
 * @prop {function} onToggle -사용자가 선택한 재료 클릭 상태 업데이트 함수
 * @prop {function} onSelect -사용자가 선택한 재료 배열 상태 업데이트 함수
 */
const IngredientsMiddleTag: React.FC<RecipeSelectTagProps> = ({
  selectedIngredients,
  onToggle,
}) => {
  //const [tagContainerWidth, setTagContainerWidth] = useState<number>(0);
  //const [leftButton, setLeftButton] = useState<number>(0);
  //const [rightButton, setRightButton] = useState<number>(0);
  const tagContainerRef = useRef<HTMLDivElement | null>(null);

  const handleButton = (ingredientName: string) => {
    ingredientName && onToggle(ingredientName);
  };

  //useEffect(() => {
  //  if (tagContainerRef.current)
  //    setTagContainerWidth(tagContainerRef.current.offsetWidth);
  //}, [selectedIngredients]);

  return (
    <RecipeSelectTagWrapper>
      {/*{<div className='tag-button'></div>}*/}
      <div className='tag-container' ref={tagContainerRef}>
        {selectedIngredients.map((ingredient, i) => (
          <div key={i} className='tag' onClick={() => handleButton(ingredient)}>
            <AiOutlineClose /> &nbsp;
            {`${ingredient}`}
          </div>
        ))}
      </div>
      {/*{<div className='tag-button'></div>}*/}
    </RecipeSelectTagWrapper>
  );
};
const RecipeSelectTagWrapper = styled.div`
display: flex;
width: 100%;
padding: 0 3%;
margin-top: 5px;
height: 3.5rem;
overflow-x: hidden;

  .tag-container{
    display:flex;
    gap: 1rem;
    width: fit-content;
    .tag {
      width: fit-content;
      min-width: max-content;
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      background-color: #cccccc;
      cursor: pointer;
      border-radius:5px;
      font-weight: 600;
      font-size: medium;
    }
  }

`;
export default IngredientsMiddleTag;
