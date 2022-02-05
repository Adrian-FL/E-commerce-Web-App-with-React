import { useEffect, useState } from "react";

const Hero = ({ name, description, url, serverUrl }) => {
    const [image, setImage] = useState(null);

    const imageFetchUrl = serverUrl;

    useEffect(() => {
        fetch(imageFetchUrl)
            .then((response) => response.blob())
            .then((imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL);
            });
    }, [imageFetchUrl]);

    return (
        <article className="hero">
            <section>
                <h2>{name}</h2>
                <p>{description}</p>
                <button>
                    <a href={url}>CTA</a>
                </button>
            </section>

            {image && (
                <img
                    className="desktop"
                    srcSet={`${image} 1200w, ${image} 250w`}
                    sizes="(max-width: 800px) 250px,
                1200px"
                    alt="Promotion"
                />
            )}
        </article>
    );
};
export default Hero;
