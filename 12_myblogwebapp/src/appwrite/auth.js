import config from "../config/config";
//import config from "../config.js"

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //Register
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //login
  async login({ email, password }) {
    try {
      //const user =
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //get current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      //throw error;
      console.log("Appwrite service ::getCurrentUser :: error", error);
    }
    return null;
  }

  //logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service ::logout :: error", error);
    }
  }
}
//create obj
const authService = new AuthService();

export default authService;
