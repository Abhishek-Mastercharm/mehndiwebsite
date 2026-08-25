export const Stack = ({ children, className = '', gap = '4', as = 'div' }) => {
  const Component = as;
  return (
    <Component className={`flex flex-col gap-${gap} ${className}`}>
      {children}
    </Component>
  );
};
