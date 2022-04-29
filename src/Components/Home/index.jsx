import React from "react";
import { STUDIO_D } from "../../constants";
const Home = () => {
	return (
		<main className="absolute top-0 left-0 w-100 vh-100 flex justify-center items-center mt4">
			<a
				className="db link dim black"
				href="https://independent.ffm.to/studiod"
				target="_blank"
				rel="noreferrer noopener"
			>
				<section className="w-100 flex flex-column  justify-center items-center pa4 pa0-ns">
					<div className="w-100 w-75-l h-75 mb2 flex justify-center items-center">
						<img
							src={STUDIO_D}
							alt="Slow Down Cover"
							className="w-50-ns w-100"
						/>
					</div>
					<div className="flex justify-center items-center mt4 pa2">
						<div className="h-25 mh3 f3 fw7">LISTEN TO STUDIO D</div>
					</div>
				</section>
			</a>
		</main>
	);
};

export default Home;
