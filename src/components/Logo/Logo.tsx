interface LogoProps {
  colored: boolean;
}

const Logo = ({ colored }: LogoProps) => {
  return (
    <a href="/">
      <img
        src={colored ? './logo_color.svg' : './logo_white.svg'}
        alt="sporthub logotype"
      ></img>
    </a>
  );
};

export default Logo;
