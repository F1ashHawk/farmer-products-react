import logo from "../../../assets/logo/logo.svg";
import {StyledLogo} from './styled';


export default function Logo({className, link}) {
  return (
    <StyledLogo $className={className} href={link}>
      <img src={logo} alt="" />
      <span>Фермерские продукты</span>
    </StyledLogo>
  );
}
