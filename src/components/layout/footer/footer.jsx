import Logo from '../../ui/logo/logo';
import './style.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <Logo />
        <p className="footer__text">Created: Panchenko N.</p>
      </div>
    </footer>
  );
}
