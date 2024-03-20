import dayjs from "dayjs";
import { Book, PersonBooks } from "../models/index.js";

export const getBookReturDate = async (req, res) => {
  try {
    const book_name = req.query.book_name;
    const response = await Book.findOne({
      where: { book_name: book_name },
      attributes: ["book_id", "book_name"],
      include: [
        {
          model: PersonBooks,
          attributes: ["days_to_return"],
          as: "bookData",
          //   limit: 1,
        },
      ],
      order: [
        [{ model: PersonBooks, as: "bookData" }, "days_to_return", "ASC"],
      ],
      nest: true,
    });
    let parsedData = JSON.parse(JSON.stringify(response));
    const currentDate = dayjs();
    const { bookName, bookId, bookData } = parsedData;
    const availableDate = currentDate
      .subtract(bookData[0].days_to_return)
      .format("DD-MMM-YYYY");
    console.log("response: ", JSON.parse(JSON.stringify(response)));

    return { bookName: bookName, bookId: bookId, availableDate };
  } catch (error) {
    console.error("error in fetching book return date", error);
    return {
      message: error.message,
    };
  }
};
