import { CSSProperties, FC } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const Cubase: FC<Props> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      style={style}
    >
      <rect fill="rgba(220, 38, 38, 0.85)" width="256" height="256" rx="60" />
      <g fill="#FFFFFF">
        <path d="M58.446 127.855L140.401 46.3l32.106 26.083s-11.13.225-20.794 3.706s-14.486 8.596-19.58 14.04c-11.146 11.915-14.325 23.365-14.243 37.955c.08 14.59 4.462 22.448 12.94 33.133c2.87 3.619 5.696 7.099 10.508 9.728c1.64.897 8.563 5.947 13.122 7.36s16.789 1.949 16.789 1.949l-29.911 31.06z"/>
        <circle cx="173" cy="128" r="22"/>
      </g>
    </svg>
  );
};

export default Cubase;