import { ChangeEvent } from "react";

import clsx from "clsx";
import Icon from "../Icon/Icon";
import useScreenSize from "../../hooks/useScreenSize";
import getErrorStylePadding from "../../utils/helpers/getErrorStylePadding";
import styles from "./Input.module.scss";

type InputType = "text" | "password" | "email" | "number" | "tel";

interface InputErrors {
  [key: string]: string;
}

interface InputProps {
  id: string;
  name: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  iconName?: string;
  isError: boolean;
  className?: string;
  errors: InputErrors;
  labelError?: boolean;
  pattern?: string;
}

const Input = ({
  id,
  name,
  type,
  label,
  placeholder,
  onBlur,
  onChange,
  value,
  iconName,
  isError,
  className,
  errors,
  labelError = true,
  pattern,
}: InputProps) => {
  const { width } = useScreenSize();

  const errorStylePadding = getErrorStylePadding(
    width,
    isError,
    errors[name]?.length
  );

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.label, {
            [styles.error]: isError && labelError,
          })}
        >
          {label}
        </label>
      )}
      <div className={styles.input}>
        {iconName && <Icon iconName={iconName} w={16} />}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx({ [styles.error]: isError })}
          pattern={pattern}
          style={{ paddingRight: errorStylePadding }}
        />
      </div>
    </div>
  );
};

export default Input;
