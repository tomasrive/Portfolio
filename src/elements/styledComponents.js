import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionContainer = styled.section`
  padding: 1% 15%;

  @media screen and (max-width: 480px) {
    padding: 1% 5%;
  }
`;
const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 65%;
  height: 100vh;
  transition: right 0.2s linear;
  list-style-type: none;
  li {
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
  }
  .svgIcon {
    color: #000 !important;
  }
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
const BackDivNavbar = styled.div`
  width: 100vw;
  height: 200vh;
  z-index: 0;
  position: absolute;
  backdrop-filter: ${(props) => (props.open ? 'blur(2px)' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.2s;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DivTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 5%;
  & > span {
    color: #e5e5e5;
    font-weight: 900;
  }
  & > hr {
    width: 40%;
    margin: 0;
    border: 1px solid #7c8584;
  }
`;

const Formulario = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 3rem;
  border: 3px solid white;
  border-radius: 25px;
  max-height: 50rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    border: 0;
    padding: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  cursor: pointer;
  ${(props) =>
    props.valido === 'false' &&
    css`
      color: #bb2929;
    `}
`;
const ContainerInput = styled.div`
  margin-bottom: 3.5rem;
  width: 100%;
`;
const GrupoInput = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 100%;
  background: none;
  height: 45px;
  line-height: 45px;
  transition: 0.3s ease all;
  padding: 0;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.valido === 'true' &&
    css`
      border-bottom: 1px solid #1ed12d;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      border-bottom: 1px solid #bb2929;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: #bb2929;
  display: none;
  position: absolute;
  ${(props) =>
    props.valido === 'true' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
  ${(props) =>
    props.valido === 'false' &&
    css`
      opacity: 1;
      color: #bb2929;
    `}
  ${(props) =>
    props.valido === 'true' &&
    css`
      opacity: 1;
      color: #1ed12d;
    `}
`;

const ContenedorBotonCentrado = styled.div`
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 480px) {
    margin: 5rem auto 0 auto;
  }
`;

const Boton = styled.button`
  width: 70px;
  height: 40px;
  background: #baa287;
  color: #e5e5e5;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    transform: translate(0px, -10px);
    box-shadow: 3px 3px 0px -1px #fff;
  }
  &:active {
    box-shadow: 3px 3px 0px -1px #696969;
  }
`;

const MensajeExito = styled.div`
  color: #1ed12d;
  width: 100%;
  position: relative;
  p {
    margin: 0;
    top: 0;
    position: absolute;
  }
  b {
    margin-left: 10px;
  }
`;

const MensajeError = styled.div`
  color: #bb2929;
  width: 100%;
  position: relative;
  p {
    margin: 0;
    top: 0;
    position: absolute;
  }
  b {
    margin-left: 10px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0;
  position: relative;
  @media screen and (max-width: 960px) {
    height: 15vh;
  }
`;

export {
  SectionContainer,
  NavbarWrapper,
  BackDivNavbar,
  DivContainer,
  DivTitleContainer,
  Formulario,
  Label,
  GrupoInput,
  InputStyled,
  LeyendaError,
  IconoValidacion,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  ContainerInput,
  Footer,
};
