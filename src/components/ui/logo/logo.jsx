import logo from "../../../assets/logo/logo.svg";
import "./style.css";

export default function Logo() {
  return (
    <a className="logo__link" href="/">
      <img className="logo__img" src={logo} alt="" />
      <span className="logo__title">Фермерские продукты</span>
    </a>
  );
}
