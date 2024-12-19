import config from "../config/config";

import { Client, Account, ID, Databases, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  buckets;

  cunstructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.buckets = new Storage(this.client);
  }

  //create post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service ::createPost :: error", error);
    }
  }

  //update post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteProjectId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service ::updatePost :: error", error);
    }
  }

  //delete document
  async deletePost(slug) {
    //slug as document id or unique id
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service ::deletePost :: error", error);
      return false;
    }
  }

  //get single post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service ::getPost :: error", error);
      return false;
    }
  }
  //get all post
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
        //OR
        //[Query.equal("status","active")]
      );
    } catch (error) {
      console.log("Appwrite service ::getPosts :: error", error);
      return false;
    }
  }

  //file upload services

  //upload file
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service ::uploadFile :: error", error);
      return false;
    }
  }

  //delete file
  async deleteFile(fileId) {
    try {
      await this.buckets.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service ::deleteFile :: error", error);
      return false;
    }
  }

  //file preview
  //without async bcoz direct access of url, response is fast
  getFilePreview(fileId) {
    return this.buckets.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
