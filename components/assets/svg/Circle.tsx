import { FC } from 'react';

interface ICircle extends React.ComponentPropsWithoutRef<'svg'> {}

export const Circle: FC<ICircle> = ({ ...svgProps }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <circle cx="17" cy="17" r="16.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
