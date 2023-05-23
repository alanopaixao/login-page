type SocialIconProps = {
  children: React.ReactNode;
};

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
  return (
    <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
      {children}
    </a>
  );
};
export default SocialIcon;
