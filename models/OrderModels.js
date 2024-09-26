import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import User from "./UserModels.js";

const Order = db.define("Order", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    TotalPrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    UserId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
}, {
    tableName: "order",
    timestamps: true,
});

export default Order;
