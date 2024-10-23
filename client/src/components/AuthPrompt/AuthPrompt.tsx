import { Link } from "react-router-dom";

import styles from "./AuthPrompt.module.scss";

interface AuthPromptProps {
  text: string;
  path: string;
  label: string;
}

const AuthPrompt = ({ text, path, label }: AuthPromptProps) => (
  <div className={styles.wrapper}>
    <p>{text}</p>
    <Link to={path}>{label}</Link>
  </div>
);

export default AuthPrompt;
