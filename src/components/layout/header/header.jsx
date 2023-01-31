import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import "./style.css";

export default function Header() {
  return (
    <div className="header__wrapper">
      <Logo />
      <Button>Купить</Button>
    </div>
  );
}
