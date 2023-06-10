const {booking}  = require("../models/index");
const { ValidationError, AppError } = require("../utils/index");
const { StatusCodes } = require("http-status-codes");

class BookingRepository {
	async create(data) {
		try {
			const book = await booking.create(data);
			return book;
		} catch (error) {
			if (error.name == "SequelizevalidationError") {
				throw new ValidationError(error);
			}

			throw new AppError(
				"RepositoryError",
				"Cannot Create booking",
				"there was some issue creating booking,please try again later",
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}

	async update(bookingId, data) {
		try {
			const book = await booking.findByPk(bookingId);
			if(data.status){
				book.status = data.status
			}
			await book.save();
			return book;
		} catch (error) {
			throw new AppError(
				"RepositoryError",
				"Cannot update booking",
				"there was some issue updating booking,please try again later",
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}
}

module.exports = BookingRepository;
