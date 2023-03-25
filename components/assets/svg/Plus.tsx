import { FC } from 'react';

interface IPlus extends React.ComponentPropsWithoutRef<'svg'> {}

export const Plus: FC<IPlus> = ({ ...svgProps }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        id="Vector"
        d="M16 9.60272H9.14286V16.5448H6.85714V9.60272H0V7.28871H6.85714V0.34668H9.14286V7.28871H16V9.60272Z"
        fill="#1B4DB1"
      />
    </svg>
  );
};
