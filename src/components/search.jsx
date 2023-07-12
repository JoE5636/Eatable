import styled from "@emotion/styled";
import SearchIcon from "../images/search.svg";
const ContainerSearch = styled.div`
  margin-left: 45px;
  gap: 10px;
  display: flex;
`;

const ContainerInput = styled.input`
  border: none;
  background: #d1d5db;
  outline: none;
`;

const ImageIcon = styled.img``;

function Search() {
  return (
    <ContainerSearch>
      <ImageIcon src={SearchIcon} />
      <ContainerInput placeholder="Search" type="search"></ContainerInput>
    </ContainerSearch>
  );
}

export default Search;
