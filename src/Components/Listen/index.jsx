import React from "react";
import { getAlbums } from "../../data";

const albums = getAlbums();
const Listen = () => {
	return (
		<main className="relative vh-100 w-100 flex flex-column justify-center items-center overflow-scroll">
			<div className="mt6 flex flex-wrap flex-row-l justify-center-l items-center-l overflow-scroll">
				{albums.map((album, idx) => (
					<div key={idx} className="fl w-50 w-20-l pa2 pa4-m ">
						<a
							href={album.link}
							className="db link dim tc"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								src={album.src}
								alt={album.alt}
								className="w-100 db outline black-10"
							/>
							<dl className="mt2 f6 lh-copy">
								<dt className="clip">TitlE</dt>
								<dd className="ml0 black f5 truncate w-100">{album.title}</dd>
								<dt className="clip">Artist</dt>
								<dd className="ml0 f5 gray truncate w-100">
									{album.artists.map((artist, idx) => (
										<React.Fragment key={idx}>{artist}&nbsp;</React.Fragment>
									))}
								</dd>
							</dl>
						</a>
					</div>
				))}
			</div>
		</main>
	);
};

export default Listen;
