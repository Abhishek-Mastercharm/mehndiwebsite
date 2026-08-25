export const Flex = ({ 
  children, 
  className = '', 
  direction = 'row', 
  justify = 'start', 
  align = 'center',
  wrap = 'nowrap',
  gap = '4'
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const justifies = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const aligns = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  };

  const wraps = {
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  return (
    <div className={`flex ${directions[direction]} ${justifies[justify]} ${aligns[align]} ${wraps[wrap]} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};
