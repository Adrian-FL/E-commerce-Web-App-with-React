import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
    let [urlSearchParams] = useSearchParams();
    const q = urlSearchParams.get("q");

    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/search?q=${q}`)
            .then((resp) => resp.json())
            .then((prods) => setSearchResult(prods))
            .catch((err) => console.log(err));
    }, [q]);

    return (
        searchResult && (
            <>
                <div>
                    {searchResult.count} träffar på "{q}"
                </div>
                <section className="items" style={{ display: "block" }}>
                    {searchResult.result.map((product) => {
                        var productDetailsUrl = `/products/${product.urlSlug}`;

                        return (
                            <article className="item details-page">
                                <div>
                                    <div className="image-frame">
                                        <img src={product.imageUrl} alt="#" />
                                    </div>
                                </div>

                                <div className="item-details">
                                    <a href={productDetailsUrl}>
                                        <h2 className="popular-products-heading">
                                            {product.name}
                                        </h2>
                                    </a>
                                    <p>{product.description}</p>
                                    <span className="floating-price-tag">
                                        {product.price} SEK
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </>
        )
    );
};
export default SearchPage;
