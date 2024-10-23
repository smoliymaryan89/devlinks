import { ReactNode } from "react";

import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  className?: string;
  title: string | ReactNode;
  variant: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  type,
  onClick,
  className,
  title,
  variant,
  disabled,
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={clsx(styles.btn, styles[variant], className)}
  >
    {title}
  </button>
);

export default Button;
