const Spots = ({ spots }) => {
    return (
        <article className="items">
            {spots ? (
                spots.map((spot, i) => (
                    <a key={i} href={spot.urlSlug}>
                        <section>
                            <img src={spot.serverUrl} alt="#" />
                            <h3>{spot.label}</h3>
                        </section>
                    </a>
                ))
            ) : (
                <a href="/">
                    <section>
                        <h3>Your product may be listed on this banner</h3>
                    </section>
                </a>
            )}
        </article>
    );
};
export default Spots;
