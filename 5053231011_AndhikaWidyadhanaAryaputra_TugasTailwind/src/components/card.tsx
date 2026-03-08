import Button from "./button";

type CardProps = {
  icon: string;
  title: string;
  descriptions: string;
  variant?: "light" | "dark";
};

export default function Card({
  icon,
  title,
  descriptions,
  variant = "light",
}: CardProps) {
  const cardStyles = {
    light: "bg-card-bg border-card-border",
    dark: "bg-card-dark-bg border-brand-secondary-hover",
  };

  const iconStyles = {
    light: "bg-card-icon-bg",
    dark: "bg-brand-secondary-hover",
  };

  const titleStyles = {
    light: "text-text-black",
    dark: "text-text-white",
  };

  const descStyles = {
    light: "text-text-grey-dark",
    dark: "text-text-grey-light",
  };

  return (
    <div
      className={`border-2 rounded-lg shadow-md p-6 flex flex-col justify-center ${cardStyles[variant]}`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${iconStyles[variant]}`}
      >
        {icon}
      </div>

      <h3 className={`font-bold text-lg mb-2 ${titleStyles[variant]}`}>
        {title}
      </h3>

      <p className={`text-sm leading-relaxed flex-1 ${descStyles[variant]}`}>
        {descriptions}
      </p>

      <div className="mt-5 flex flex-col gap-2">
        <Button label="Read More" variant="secondary"></Button>
        <Button label="Start Now" variant="primary"></Button>
      </div>
    </div>
  );
}
