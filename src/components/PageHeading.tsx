interface Props {
  extraClasses?: string;
}

const PageHeading: React.FC<Props> = ({ children, extraClasses }) => {
  const classes = 'text-4xl text-slate-700 font-semibold ' + extraClasses;

  return <h1 className={classes}>{children}</h1>;
};

export default PageHeading;
