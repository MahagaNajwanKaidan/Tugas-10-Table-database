import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Artist = db.define("Artist", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "artist",
    timestamps: true,
});

export default Artist;

