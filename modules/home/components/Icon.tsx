import { ElementType, FC, useId } from "react";
import styles from "./Icon.module.css";
import { twMerge } from "tailwind-merge";

type Props = {
  component: ElementType;
  className?: string;
  fromColor?: string;
  toColor?: string;
};

const Icon: FC<Props> = ({
  component: Component,
  className,
  fromColor = "rgba(0,0,0,1)",
  toColor = "rgba(0,0,0,0.5)",
}) => {
  const gradientId = useId();

  return (
    <>
      <Component
        className={twMerge(styles.icon, className)}
        style={{ fill: `url(#${gradientId})` }}
      />
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </svg>
    </>
  );
};

export default Icon;
