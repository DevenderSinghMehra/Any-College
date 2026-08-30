type SpriteIconProps = {
  className?: string;
  iconName: string;
};

export function SpriteIcon({ className, iconName }: SpriteIconProps) {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${iconName}`}></use>
    </svg>
  );
}
