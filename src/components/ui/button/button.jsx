import {StyledButton} from './styled';

export default function Button({children, minWidth, link, className}) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? {href: link} : {as: "button", type: "button"})}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
