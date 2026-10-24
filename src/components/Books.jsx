import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    const books = getBooks();

    return (
        <div style={{ display: "flex", marginRight: "5rem" }}>
            <nav style={{ borderLeft: "1px solid", padding: "1rem 0" }}>
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value
                        if (filter) {
                            setSearchParams({ filter })
                        } else {
                            setSearchParams({})
                        }
                    }}
                    type="text" placeholder="جستجوی کتاب" />
                {books.filter((book) => {
                    let filter = searchParams.get("filter")
                    if (!filter) return true;
                    let name = book.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase())
                })
                    .map((book) => (
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "flex",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                };
                            }}
                            to={`/books/${book.number} ${location.search}`}
                            key={book.number}
                        >
                            {book.name}
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
};
export default Books;
