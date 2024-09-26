 import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const TicketType = db.define("TicketType", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quota: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: "tickettype",
    timestamps: true,
    
});

export default TicketType;
