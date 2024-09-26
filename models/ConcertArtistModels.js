import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Artist from "./ArtistModels.js";
import Concert from "./ConcertModels.js";

const ConcertArtist = db.define("ConcertArtist", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ArtistId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Artist,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    ConcertId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Concert,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    
}, {
    tableName: "concertartist",
    timestamps: true,
});

export default ConcertArtist;
