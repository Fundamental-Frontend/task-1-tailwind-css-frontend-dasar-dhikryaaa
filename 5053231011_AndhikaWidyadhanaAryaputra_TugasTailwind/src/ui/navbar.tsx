import Button from "../components/button";

const NavLinks = [
  { label: "Home", href: "#" },
  { label: "Learning Path", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-brand-primary-light/70 backdrop-blur-md">
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-8">
                <a href="#" className="flex items-center gap-2.5">
                    <span className="font-bold text-xl">
                        Edu
                        <span className="text-brand-primary">
                            Smart
                        </span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {NavLinks.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-brand-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Button label="Login" variant="secondary"></Button>
                    <Button label="Sign Up" variant="primary"></Button>
                </div>
            </div>
        </nav>
    )
}
