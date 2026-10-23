import { NavLink, Outlet } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
    const books = getBooks();

    return (
        <div style={{ display: "flex", marginRight: "5rem" }}>
            <nav style={{ borderLeft: "1px solid", padding: "1rem 0" }}>
                <input type="text" placeholder="جستجوی کتاب" />
                {
                    books.map((book) => (
                        <NavLink style={({ isActive }) => {
                            return {
                                display: "flex",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            }
                        }} to={`/books/${book.number}`} key={book.number}>{book.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    )
}
export default Books;