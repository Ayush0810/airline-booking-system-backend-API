const { Booking } = require("../models/index");
const { ValidationError, AppError } = require("../utils/index");
const { StatusCodes } = require("http-status-codes");

class BookingRepository {
	async create(data) {
        try {
        const booking = await Booking.create(data);
        return booking;
		
		} catch (error) {
			if (error.name == "SequelizevalidationError") {
				throw new ValidationError(error);
			}

			throw new AppError("RepositoryError", "Cannot Create booking", 
            "there was some issue creating booking,please try again later",
            StatusCodes.INTERNAL_SERVER_ERROR
            );
		}
	}
}

module.exports = BookingRepository;
