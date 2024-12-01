import { CSSProperties, FC } from "react";

interface OtherTool {
  id: string;
  title: string;
  icon: FC<{
    className?: string;
    style?: CSSProperties;
  }>;
}

export default OtherTool;
