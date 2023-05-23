type TextProps = {
  text: string;
  className?: string;
};

const Button: React.FC<TextProps> = ({ text, className }) => {
  return (
    <a
      href="#"
      className={`border-2 border-white rounded-full px-12 py-2 whitespace-nowrap inline-block bg-green-500 font-semibold hover:bg-white hover:text-green-500 hover:transition-all ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
