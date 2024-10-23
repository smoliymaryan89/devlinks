interface IconProps {
  className?: string;
  w: number;
  h?: number;
  iconName: string;
}

const Icon = ({ className, w, h = w, iconName }: IconProps) => (
  <svg className={className} width={w} height={h}>
    <use href={`/icons/sprite.svg#${iconName}`}></use>
  </svg>
);

export default Icon;
