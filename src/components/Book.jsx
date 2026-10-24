import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";
const Book = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams();
    const book = getBook(parseInt(params.bookId));
    if (book) {
        return (

            <main style={{ padding: "1rem", textAlign: "center" }}>
                <h2>قیمت کل : {`${book.amount} تومان`}</h2>
                <p>
                    {book.name}
                </p>
                <p>
                    تاریخ انتشار : {book.due}
                </p>
                <button onClick={() => {
                    deleteBook(book.number);
                    navigate("/books" + location.search)


                }}>حذف کتاب</button>
            </main>
        )

    } else {
        return (
            <main style={{ padding: "1rem" }}>
                <h1>NOT FOUND</h1>
            </main>
        )
    }
}
export default Book;