import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://rastogiarchi18:VEWrcE72ou2rczHy@cluster0.ggqau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongodb connected" + conn.connection.host);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;