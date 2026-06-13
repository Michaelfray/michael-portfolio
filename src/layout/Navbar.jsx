const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items">
        <a href="#">
          MF<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
