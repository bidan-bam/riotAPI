import styled from "styled-components";

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoText>TrollTime</S.LogoText>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const LogoText = styled.div`
  font-size: 128px;
  text-align: center;
`;

const S = {
  Wrapper,
  LogoText,
};
