import { UserModel } from '@/models/user.model';

const getUsers = () => UserModel.find();
const getUserByEmail = (email: string) => UserModel.findOne({ email });
const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ 'authentication.sessionToken': sessionToken });
const getUserById = (id: string) => UserModel.findById(id);
const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });
const updateUserById = (id: string, value: Record<string, string | boolean>) => UserModel.findByIdAndUpdate(id, value);

class UserController {
  async getUsers() {
    return UserModel.find();
  }

  async getUserByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async getUserBySessionToken(sessionToken: string) {
    return UserModel.findOne({ 'authentication.sessionToken': sessionToken });
  }

  async getUserById(id: string) {
    return UserModel.findById(id);
  }

  async createUser(values: Record<string, any>) {
    const user = new UserModel(values);
    await user.save();
    return user.toObject();
  }

  async deleteUserById(id: string) {
    return UserModel.findOneAndDelete({ _id: id });
  }

  async updateUserById(id: string, value: Record<string, string | boolean>) {
    return UserModel.findByIdAndUpdate(id, value);
  }
}

export const userController = new UserController();
