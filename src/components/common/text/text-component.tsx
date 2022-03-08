interface Props {
  className?: string;
  fontSize?: any;
  color?: string;
  children: JSX.Element;
}

export const TextComponent = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};
