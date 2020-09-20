import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="header">
				<nav className="nav">
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/github">
						<a>Github</a>
					</Link>
				</nav>
			</header>
		</>
	);
}
