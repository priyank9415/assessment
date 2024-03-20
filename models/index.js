import Book from "./Books.js";
import Customer from "./Customer.js";
import PersonBooks from "./PersonBook.js";

PersonBooks.belongsTo(Book, { as: "customerData", foreignKey: "book_id" });
Book.hasMany(PersonBooks, { as: "bookData", foreignKey: "book_id" });
Customer.hasMany(PersonBooks, {
  as: "bookRecord",
  foreignKey: "customer_id",
});
PersonBooks.belongsTo(Customer, { as: "issueBook", foreignKey: "customer_id" });

export { PersonBooks, Customer, Book };
