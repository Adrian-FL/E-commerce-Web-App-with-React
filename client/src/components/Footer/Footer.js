const Footer = () => {
    return (
        <footer>
            <article className="icons">
                <section>
                    <i className="fas fa-truck"></i>
                    <span>Gratis frakt och returer</span>
                </section>
                <section>
                    <i className="fas fa-truck"></i>
                    <span>Expressfrakt</span>
                </section>
                <section>
                    <i className="fas fa-credit-card"></i>
                    <span>Säkra betalningar</span>
                </section>
                <section>
                    <i className="fas fa-rss"></i>
                    <span>Nyheter varje dag</span>
                </section>
            </article>

            <nav>
                <article className="links shopping">
                    <h3>
                        <a href="/">Shopping</a>
                    </h3>
                    <p>
                        <a href="/">Vinterjackor</a>
                    </p>
                    <p>
                        <a href="/">Pufferjackor</a>
                    </p>
                    <p>
                        <a href="/">Kappa</a>
                    </p>
                    <p>
                        <a href="/">Trenchcoats</a>
                    </p>
                </article>
                <article className="links mina-sidor">
                    <h3>
                        <a href="/">Mina Sidor</a>
                    </h3>
                    <p>
                        <a href="/">Mina Ordrar</a>
                    </p>
                    <p>
                        <a href="/">Mitt Konto</a>
                    </p>
                </article>
                <article className="links kundtjanst">
                    <h3>
                        <a href="/">Kundtjänst</a>
                    </h3>
                    <p>
                        <a href="/">Returpolicy</a>
                    </p>
                    <p>
                        <a href="/">Integritetspolicy</a>
                    </p>
                </article>
                <article className="location-language">
                    <h3>Välj land och språk</h3>
                    <label htmlFor="country"> Land </label>
                    <select id="country">
                        <option>Välj land</option>
                        <option>Sverige</option>
                    </select>
                    <label> Språk </label>
                    <select>
                        <option>Välj språk</option>
                        <option>Svenska</option>
                    </select>
                </article>
            </nav>
            <small>&copy; 2021 FreakyFashion</small>
        </footer>
    );
};
export default Footer;
