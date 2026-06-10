const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header>
      <nav>
        <a>
          MF<span>.</span>
        </a>

        {/*Desktop Nav */}
        <div>
          <div>
            {navLinks.map((link) => (
                <a>(link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
