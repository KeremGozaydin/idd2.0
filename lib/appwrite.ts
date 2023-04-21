import { Client, Databases } from "appwrite";

const client = new Client();

export const databases = new Databases(client);

client
    .setEndpoint('http://46.101.112.25/v1') // Your API Endpoint
    .setProject('643140a0d02a08699714') // Your project ID
;

export const DATABASE_ID = "6431419b47ec2993715e";

export const TEAM_MEMBERS_ID = "643142d9bffa333d631d";

export const PROJECTS_ID = "643416d95f6d09fb7d84";

export const BLOG_ID = "64341b6ccee2c6a1cf91";