import { conf } from "../conf/conf.js";
import { Client, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.account.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login(email, password) {
    try {
        return await this.account.login(email, password);
    } catch (error) {
        throw error;
    }
  }
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite error :: getCurrentUser :: error", error);
    }
    return null;
}
    async logout() {
        try {
            await this.account.deleteSessions("current");
        } catch (error) {
            throw error;
        }
    }
}

const AuthService = new AuthService();
export default AuthService;