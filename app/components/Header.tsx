import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/blog" className="nav-link">
        Blog
      </Link>
    </header>
  );
};

export { Header };
