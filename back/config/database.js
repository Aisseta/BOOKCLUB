import mongoose from "mongoose";


export const connectDB = mongoose.connect("mongodb+srv://diawaisseta:uFMFD3bnomSPs8O1@cluster0.e0brxpv.mongodb.net/thebookclub")

mongoose.connection.on("open", () => {
    console.log(" Connexion à la Base de Données réussie");
}
)

mongoose.connection.on("error", () => {
    console.log("Erreur de connexion à la Base de Données");
}
)


