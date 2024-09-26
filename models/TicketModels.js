import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import TicketType from "./TicketTypeModel.js";
import Order from "./OrderModels.js";

const Ticket = db.define("Ticket", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ticketNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
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
    TicketTypeId: {  // Foreign key ke tabel Order
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TicketType,  // Nama tabel yang direferensikan
            key: 'id',       // Primary key dari model Order
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
}, {
    tableName: "ticket",
    timestamps: true,
});

export default Ticket;

