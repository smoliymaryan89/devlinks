import { ReactNode } from "react";

import clsx from "clsx";
import styles from "./Container.module.scss";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => (
  <div className={clsx(styles.container, className)}>{children}</div>
);

export default Container;
