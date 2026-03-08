type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ label, variant = "primary" }: ButtonProps) {
  const base =
    "font-semibold px-6 py-2.5 rounded-xl transition duration-200 cursor-pointer text-sm";
  const styles = {
    primary:
      "bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover shadow-md",
    secondary:
      "border-2 border-btn-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover-bg hover:text-btn-secondary-hover-text shadow-md",
    ghost:
      "border-2 border-btn-ghost-border text-btn-ghost-text hover:bg-btn-ghost-hover-bg hover:text-btn-ghost-hover-text shadow-md",
  };

  return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}
