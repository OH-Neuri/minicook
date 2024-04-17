import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import SearchBarForm from "../search/searchBarForm";
import SearchBarContainer from "../../containers/search/searchBarContainer";

const NavBar: React.FC = () => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false); // 검색 바의 열림/닫힘 상태를 관리하는 상태 변수
  const navbarInfoRef = useRef<HTMLDivElement | null>(null); // 검색 바의 정보를 참조하는 ref
  const [input, setInput] = useState<string>(""); // 검색어를 관리하는 상태 변수
  const debounceInput = useDebounce(input, 800); // 검색어 입력의 디바운스를 적용한 값

  const handleOpenSearchBar = () => setNavBarOpen(true); // 검색 바 열기 이벤트 핸들러
  const handleCloseSearchBar = () => setNavBarOpen(false); // 검색 바 닫기 이벤트 핸들러

  const handleInput = useCallback(
    (input: string) => {
      setInput(input);
    },
    [input]
  );

  // 검색바가 열려 있고 외부를 클릭할 때 검색바를 닫음
  useEffect(() => {
    const handler = (e: { target: any }) => {
      if (
        navBarOpen &&
        navbarInfoRef.current &&
        !navbarInfoRef.current.contains(e.target)
      )
        handleCloseSearchBar();
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [navBarOpen]);

  return (
    <NavBarWrapper>
      <Section>
        <StyledLink to='/recipe/select'>레시피 선택</StyledLink>
        <div className='navbar-search-wrapper' ref={navbarInfoRef}>
          <SearchBarForm
            onChangeInput={handleInput}
            onSearchClick={handleOpenSearchBar}
          />
          {navBarOpen && <SearchBarContainer input={debounceInput} />}
        </div>
        <StyledText>#대파 #카레 #김밥</StyledText>
      </Section>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top :  1.8px solid #fffbf5;
  border-bottom:  1.8px solid #fffbf5;
  background-color:white;
`;

const Section = styled.div`
  height:60px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  .navbar-search-wrapper{
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  min-width: 130px;
  font-weight: 600;
  
 @media screen and (max-width: 790px) {
  min-width: 70px;
  font-size: 0.9rem;
}
 @media screen and (max-width: 400px) {
  min-width: 60px;
  font-size: 0.75rem;
}
`;

const StyledText = styled.div`
  min-width: 130px;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  
  color:gray;
  font-size: small;
  font-weight: 300;
// 모바일
 @media screen and (max-width: 790px) {
  min-width: 30px;
  max-width: 80px;
  font-size:0.7rem;
}
  @media screen and (max-width: 400px) {
  min-width: 40px;
  max-width: 50px;
  font-size: 0.75rem;
}
`;

export default React.memo(NavBar);
