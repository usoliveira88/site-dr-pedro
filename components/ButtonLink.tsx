import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-petrol text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal hover:shadow-lift",
    secondary: "border border-petrol/20 bg-white/80 text-petrol hover:-translate-y-0.5 hover:border-gold hover:shadow-soft",
    ghost: "text-petrol hover:text-teal"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-subtle px-5 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
