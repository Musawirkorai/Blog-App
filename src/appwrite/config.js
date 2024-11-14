import conf from "../conf/conf";
import { Client,ID, Databases,Storage,Query } from "appwrite";


export class Service{
	client = new Client ();
	databases;
	buket;
	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.Databases = new Databases (this.client);
		this.bucket = new Storage(this.client)

	}
	async createPost({title,slug,content,featuredImage, status,userId}){
		try {
			return await this.databases.createPost(conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,featuredImage,
					status,
					userId
				}
			)
			
		} catch (error) {
			console.log("AppwriteError",error);
			
		}
	}
	async updatePost({slug ,title, content, featuredImage, status }){
		try {
			return await this.databases.updateDocument(conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status
				}
			)
		} catch (error) {
			console.log(error);
			
		}


	}

    async deletePost(slug){
	try {
		await this.databases.deleteDocument(
			cons.appwriteDatabaseId,
			conf.appwriteCollectionId,
			slug
		)
		return true
	} catch (error) {
		console.log(error);

	return false
		
	}

    }

	async getPost(slug){

	}
	async getPsot(quiries=[Query.equal("status", "active")]){

		try {
			return await this.databases.listDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				quiries,
				100,0,
			)
		} catch (error) {
			console.log(error);
			
		}


	}

}

const service = new Service ()
