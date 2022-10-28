interface Props {
  children: React.ReactNode;
  type: 'success' | 'warning' | 'danger';
  key?: number;
  extraClasses?: string;
}
const Alert = ({ children, type, key, extraClasses }: Props) => {
  let color;
  switch (type) {
    case 'success':
      color = 'border-green-600 hover:border-green-900 border-2 text-green-600';
      break;
    case 'warning':
      color = 'border-red-600 hover:border-red-900 border-2 text-red-700 ';
      break;
    default:
      color = 'border-red-600 hover:border-red-900 border-2 shadow-lg text-red-700 ';
  }
  const classes = `text-center p-2 rounded mt-4 ${color} ${extraClasses}`;

  return (
    <div key={key} className={classes}>
      {children}
    </div>
  );
};

export default Alert;
