export const Container = ({ children, className = '', maxWidth = '1280px' }) => {
  return (
    <div className={`w-full mx-auto px-4 md:px-6 lg:px-8 ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  );
};
