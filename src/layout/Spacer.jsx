export const Spacer = ({ size = '4', horizontal = false }) => {
  const cls = horizontal ? `w-${size}` : `h-${size}`;
  return <div className={`${cls} shrink-0`} aria-hidden="true" />;
};
