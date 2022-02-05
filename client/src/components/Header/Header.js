import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${searchTerm}`);

        setSearchTerm("");
    };
    // for the dynamic menu:
    const [menuItems, setMenuItems] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/menu")
            .then((res) => res.json())
            .then((data) => setMenuItems(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <header>
                <a href={"/"}>
                    <img src="https://via.placeholder.com/250x90" alt="#" />
                </a>
                <div className="search-container">
                    <form onSubmit={handleSubmit} action="/search">
                        <i className="fas fa-search"></i>
                        <input
                            placeholder="Search"
                            type="search"
                            aria-label="Search"
                            name="q"
                            onSubmit={handleSubmit}
                        />
                    </form>
                </div>

                <nav>
                    {menuItems &&
                        menuItems.map((menuItem, i) => (
                            <a key={i} href={menuItem.href}>
                                {menuItem.name}
                            </a>
                        ))}
                </nav>
            </header>
        </>
    );
};
export default Header;
