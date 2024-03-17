import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import styled from "styled-components";
import { setResetRemoveIndex } from "../../store/reducers/userLiked";
interface LikedModifyButtonProps {
  onModify: () => void;
  onRemove: (removeIndex: number[]) => void;
}

const LikedModifyButton: React.FC<LikedModifyButtonProps> = ({ onModify, onRemove }) => {
  const modify = useSelector((state: RootState) => state.userLiked.modify);
  const removeIndex = useSelector((state: RootState) => state.userLiked.removeIndex);
  const dispatch = useDispatch<AppDispatch>();
  // 변경 취소 버튼
  const handleCancel = () => {
    onModify();
  };
  // 선택한 레시피 삭제
  const handleRemove = () => {
    onRemove(removeIndex);
    dispatch(setResetRemoveIndex());
    onModify();
  };

  return (
    <LikedModifyButtonWrapper>
      {modify && (
        <StyledButton className='cancel mr-2' onClick={handleCancel}>
          취소
        </StyledButton>
      )}
      {modify ? (
        <StyledButton className='remove' onClick={handleRemove}>
          삭제
        </StyledButton>
      ) : (
        <StyledButton className='modify' onClick={handleCancel}>
          수정
        </StyledButton>
      )}
    </LikedModifyButtonWrapper>
  );
};
const LikedModifyButtonWrapper = styled.div`
display: flex;
justify-content: end;
width: 20%;
`;

const StyledButton = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
background-color: #767676;
border-radius: 10px;
color:white;
cursor: pointer;
&.remove{
  background-color: #ad0000;
}
&.modify{
  background-color: #356400;
}
`;
export default LikedModifyButton;
