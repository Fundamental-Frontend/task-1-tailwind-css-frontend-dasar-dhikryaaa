import Button from "../components/button";

const NavLinks = [
  { label: "Home", href: "#" },
  { label: "Learning Path", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About Us", href: "#" },
];

const SocMed = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Youtube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-secondary w-full p-8">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto pb-10 gap-8">
        <div className="flex-1 flex flex-col">
          <h1 className="font-bold text-xl text-brand-primary-light">
            Edu<span className="text-brand-primary">Smart</span>
          </h1>
          <p className="font-medium text-text-grey-light mb-5">
            Your number #1 digital platform courses. Join us now!
          </p>
          <div className="flex flex-row gap-2">
            <Button label="Login" variant="secondary"></Button>
            <Button label="Sign Up" variant="primary"></Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="font-medium text-xl text-brand-primary">Platforms</p>
          <div className="flex flex-col font-medium text-text-grey-light gap-2">
            {NavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="font-medium text-xl text-brand-primary">Social Media</p>
          <div className="flex flex-col font-medium text-text-grey-light gap-2">
            {SocMed.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-brand-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-text-grey-light text-sm font-medium">
        &copy; 2026 EduSmart Copryght.
      </div>
    </footer>
  );
}
