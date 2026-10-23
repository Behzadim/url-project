import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Books from "./components/Books";
import Book from "./components/Book";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>کتاب مورد نظر خود را انتخاب نمایید</p>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
        <Route
          path="*"
          index
          element={
            <main style={{ padding: "1rem", textAlign: "center" }}>
              <h1>NOT FOUND</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
