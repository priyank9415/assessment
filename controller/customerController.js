import dayjs from "dayjs";
import { Book, Customer, PersonBooks } from "../models/index.js";

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
          attributes: ["book_name"],
          where: { book_name: book_name },
          as: "customerData",
        },
      ],
      nest: true,
    });
    let parsedData = JSON.parse(JSON.stringify(result));
    const currentDate = dayjs();
    // const { bookName, bookId, bookData } = parsedData;
    const price = currentDate.diff(parsedData.lend_date, "day");
    return { total_price: price };
  } catch (error) {}
};
