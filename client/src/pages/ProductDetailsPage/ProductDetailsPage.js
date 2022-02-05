import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
    // console.log("PRODUCT DETAILS");
    let { urlSlug } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${urlSlug}`)
            .then((resp) => resp.json())
            .then((newProduct) => {
                setProduct(newProduct);
                console.log(newProduct);
            })
            .catch((err) => console.log(err));
    }, [urlSlug]);

    return (
        <section>
            <section className="items">
                {product && (
                    <article className="item details-page">
                        <div>
                            <div className="image-frame">
                                <img src={product.imageUrl} alt="#" />
                            </div>
                        </div>
                        <div className="item-details">
                            <h2 className="popular-products-heading">
                                {product.name}
                            </h2>
                            <div>{product.description}</div>
                            <div className="price-tag">{product.price} SEK</div>

                            <button className="details-button">
                                {" "}
                                Lägg i varukorgen
                            </button>
                        </div>
                    </article>
                )}
            </section>
        </section>
    );
};
export default ProductDetailsPage;
