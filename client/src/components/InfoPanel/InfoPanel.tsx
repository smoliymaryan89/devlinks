import styles from "./InfoPanel.module.scss";

interface InfoPanelProps {
  title: string;
  text: string;
}

const InfoPanel = ({ title, text }: InfoPanelProps) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.text}>{text}</p>
  </>
);

export default InfoPanel;
