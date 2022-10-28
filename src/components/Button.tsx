interface Props {
  children: React.ReactNode;
  color: 'primary' | 'success' | 'secondary' | 'warning' | 'danger';
  handleClick?: () => void;
  type?: 'button' | 'submit';
  extraClasses?: string;
}

const Button: React.FC<Props> = ({
  children,
  color,
  handleClick,
  type,
  extraClasses,
}) => {
  let colors: string;
  switch (color) {
    case 'primary':
      colors = 'border-stone-500 hover:border-stone-800 border-2';
      break;
    case 'success':
      colors = 'border-stone-500 hover:border-stone-800 hover:bg-amber-900 hover:text-white border-2';
      break;
    case 'warning':
      colors = 'border-orange-500 hover:border-orange-800 text-orange-600 border-2';
      break;
    case 'secondary':
      colors = 'border-fuchsia-600 hover:border-fuchsia-600 border-2';
      break;
    default:
      colors = 'border-red-600 hover:border-red-900 border-2';
  }
  const classes = `rounded text-black py-2 px-4 ${colors} ${extraClasses}`;

  return (
    <button className={classes} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
