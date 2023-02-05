import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import {StyledHeader} from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Button minWidth={260} link={"/buy"}>Купить</Button>
    </StyledHeader>
  );
}
