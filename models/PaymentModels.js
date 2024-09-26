import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Order from "./OrderModels.js";

const Payment = db.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    OrderId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "payment",
    timestamps: true,
});

export default Payment;

