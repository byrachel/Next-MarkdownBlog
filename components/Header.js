import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
            <Link href="/">
                <a>Home</a>
            </Link>
            {/* <Link href="/Family">
                <a>Blog</a>
            </Link> */}
        </nav>
      </header>
    </>
  )
}