const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(data) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			if (error.name == "SequelizeValidationError") {
				throw error;
			}
			console.log("something went wrong on service layer");
			throw { error };
		}
	}

	async signin(email, plainPassword) {
		try {
			const user = await this.userRepository.getByEmail(email);

			const passwordsMatch = this.checkPassword(plainPassword, user.password);
			if (!passwordsMatch) {
				console.log("password dont match");
				throw { error: "incorrect password" };
			}

			const newJwt = this.createToken({
				email: user.email,
				id: user.id,
			});
			console.log(newJwt);

			return newJwt;
		} catch (error) {
			console.log("something went wrong in signin process");
			throw { error };
		}
	}

	createToken(user) {
		try {
			const result = jwt.sign(user, JWT_KEY, {
				expiresIn: "1d",
			});
			return result;
		} catch (error) {
			console.log("something went wrong on token creation");
			throw { error };
		}
	}

	verifyToken(token) {
		try {
			const response = jwt.verify(token, JWT_KEY);
			return response;
		} catch (error) {
			console.log("something went wrong on token validation");
			throw { error };
		}
	}
	checkPassword(userInputPlainPassword, encryptedPassword) {
		try {
			return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
		} catch (error) {
			console.log("something went wrong in password comparison");
			throw { error };
		}
	}

	async isAuthenticated(token) {
		try {
			const response = this.verifyToken(token);
			if (!response) {
				throw { error: "Invalid token" };
			}

			const user = this.userRepository.getById(response.id);
			if (!user) {
				throw { error: "no user with this corrsponding token exists" };
			}
			return user.id;
		} catch (error) {
			console.log("something went wrong in password comparison");
			throw { error };
		}
	}

	async isAdmin(userId) {
        try {
            return this.userRepository.isAdmin(userId)
            
        } catch (error) {
            console.log("something went wrong in service layer");
			throw { error };


        }
    }
}
module.exports = UserService;
