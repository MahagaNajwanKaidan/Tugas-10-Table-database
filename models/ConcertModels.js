import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Venue from "./VenueModels.js";

const Concert = db.define("Concert", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    VenueId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Venue,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        }, 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    
}, {
    tableName: "concert",
    timestamps: true,
});

export default Concert;
