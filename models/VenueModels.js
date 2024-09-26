import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Venue = db.define("Venue", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "venue",
    timestamps: true,
});


export default Venue;
