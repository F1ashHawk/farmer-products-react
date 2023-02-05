import Logo from '../../ui/logo/logo';
import {FooterText, FooterWrapper} from './styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <FooterText>Created: Panchenko N.</FooterText>
    </FooterWrapper>
  );
}
