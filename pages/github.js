const Github = ({ name, bio }) => {
	return (
		<>
			<h1>{name}</h1>
			<h2>Bio: {bio}</h2>
		</>
	);
};

Github.getInitialProps = async () => {
	const res = await fetch(`https://api.github.com/users/byrachel`);
	const user = await res.json();
	return user;
};
export default Github;
