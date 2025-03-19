import conf from "../conf/conf.js";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndPoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("AppwriteService :: getDocument() ", error);
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("AppwriteService:: getPost():: ", error);
      return false;
    }
  }
  async createPost(title, slug, content, featuredImage, status, userId) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
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
      console.log("AppwriteService:: createPost():: ", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppwriteService:: updatePost():: ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppwriteService:: deletePost():: ", error);
      return false;
    }
  }
  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            this.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("AppwriteService:: uploadFile():: ", error);
        return false;
    }
  }
  async deleteFile(fileId){
    try {
        
    return await this.bucket.deleteFile(
       conf.appwriteBucketId,fileId
    )
    } catch (error) {
        console.log("AppwriteService:: deleteFile():: ", error);
        return false;
        
    }
  }
    
  getFilePreview(fileId){
   try {
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
         fileId
     ).href
   } catch (error) {
    console.log("AppwriteService:: getFilePreview():: ", error);
    return false;
   }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService; 

