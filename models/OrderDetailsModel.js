import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Order from "./OrderModels.js";
import TicketType from "./TicketTypeModel.js";

const OrderDetails = db.define("OrderDetails", {
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
    TicketTypeId: {  // Foreign key ke tabel TicketType
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TicketType,  // Nama tabel yang direferensikan
            key: 'id',            // Primary key dari model TicketType
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "orderdetail",
    timestamps: true,
});

export default OrderDetails;
