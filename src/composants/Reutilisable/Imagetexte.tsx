interface ImageTexteProps {
	title: string;
	paragraphe1: string;
	paragraphe2: string;
	paragraphe3?: string;
	paragraphe4?: string;
	paragraphe5?: string;
	image: string;
	className: string;
	alt: string;
	className1: string;
}

function ImageTexte({
	className,
	className1,
	title,
	paragraphe1,
	paragraphe2,
	paragraphe3,
	paragraphe4,
	paragraphe5,
	image,
	alt,
}: ImageTexteProps) {
	return (
		<section className={className}>
			<img src={image} alt={alt} />
			<article className={className1}>
				<h2>{title}</h2>
				<p>{paragraphe1}</p>
				<p>{paragraphe2}</p>
				{paragraphe3 && <p>{paragraphe3}</p>}
				{paragraphe4 && <p>{paragraphe4}</p>}
				{paragraphe5 && <p>{paragraphe5}</p>}
			</article>
		</section>
	);
}

export default ImageTexte;
