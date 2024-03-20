import dayjs from "dayjs";
import { Book, Customer, PersonBooks } from "../models/index.js";
import { RENT } from "../config/rentConfig.js";

export const getReturnAmount = async (req, res) => {
  try {
    const { customer_name, book_name } = req.query;
    const result = await PersonBooks.findOne({
      attributes: ["lend_date"],
      include: [
        {
          model: Customer,
          attributes: ["customer_name"],
          where: { customer_name: customer_name },
          as: "issueBook",
        },
        {
          model: Book,
          attributes: ["book_name", "book_type"],
          where: { book_name: book_name },
          as: "customerData",
        },
      ],
      nest: true,
    });
    let parsedData = JSON.parse(JSON.stringify(result));
    let booktype = parsedData.customerData.book_type;
    const currentDate = dayjs();
    // const { bookName, bookId, bookData } = parsedData;
    const days = currentDate.diff(parsedData.lend_date, "day");
    return {
      total_days: days,
      total_price: days * RENT[booktype],
      book_type: booktype,
    };
  } catch (error) {}
};
