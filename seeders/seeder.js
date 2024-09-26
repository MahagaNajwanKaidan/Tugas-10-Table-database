// import db from '../utils/connection.js';
import User from '../models/UserModels.js';
import Concert from '../models/ConcertModels.js';
import Venue from '../models/VenueModels.js';
import TicketType from '../models/TicketTypeModel.js';
import Order from '../models/OrderModels.js';
import OrderDetails from '../models/OrderDetailsModel.js';
import Payment from '../models/PaymentModels.js';
import Artist from '../models/ArtistModels.js';
import Ticket from '../models/TicketModels.js';
import ConcertArtist from '../models/ConcertArtistModels.js';

const createSeeder = async () => {
    try {
        // Seeder untuk User
        const user1 = await User.create({
            username: "mahagakaidan",
            email: "mahaga@example.com",
            password: "12345",
        });

        const user2 = await User.create({
            username: "janegracia",
            email: "jane@example.com",
            password: "123456",
        });

        // Seeder untuk Venue
        const venue1 = await Venue.create({
            name: "Stadium A",
            location: "City Center",
        });

        const venue2 = await Venue.create({
            name: "Stadium B",
            location: "City Northway",
        });

        // Seeder untuk Concert
        const concert1 = await Concert.create({
            name: "Rock Fest",
            date: new Date('2024-11-15'),
            VenueId: venue1.dataValues.id,
        });

        const concert2 = await Concert.create({
            name: "Jazz Night",
            date: new Date('2024-12-20'),
            VenueId: venue2.dataValues.id,
        });

        // Seeder untuk Artist
        const artist1 = await Artist.create({
            name: "Band One",
            genre: "Rock",
            bio: "famous rock band.",
        });

        const artist2 = await Artist.create({
            name: "Band Two",
            genre: "Jazz",
            bio: "popular jazz band.",
        });

        // Menghubungkan Artists dengan Concerts (many-to-many)
        const concertartist = await ConcertArtist.create({
            ConcertId: concert1.dataValues.id,
            ArtistId: artist1.dataValues.id,
        });

       const concertartist2 = await ConcertArtist.create({
            ConcertId: concert2.dataValues.id,
            ArtistId: artist2.dataValues.id,
        });

        // Seeder untuk TicketTypes
        const tickettype1 = await TicketType.create({
            name: "Regular",
            price: 500,
            quota: 1000,
        });

        const tickettype2 = await TicketType.create({
            name: "VIP",
            price: 1000,
            quota: 500,
        });

        // Seeder untuk Order
        const order1 = await Order.create({
            TotalPrice: 150,
            OrderDate: new Date(),
            UserId: user1.dataValues.id, // Foreign Key ke User
        });

        // Seeder untuk OrderDetails
        const orderdetail1 = await OrderDetails.create({
            OrderId: order1.dataValues.id, // Foreign Key ke Order
            TicketTypeId: tickettype1.dataValues.id, // Foreign Key ke TicketType
            quantity: 2,
        });

        // Seeder untuk Payments
        const payment1 = await Payment.create({
            OrderId: order1.dataValues.id, // Foreign Key ke Order
            amount: 150,
            paymentMethod: "Credit Card",
            status: "Completed",
        });


        
        // Seeder untuk Tickets
        const ticket1 = await Ticket.create({
            ticketNumber: "TICKET001",
            status: "active",
            OrderID: order1.dataValues.id,
            TicketTypeID: tickettype1.dataValues.id,
        });

        console.log("All seed data has been created successfully!");

    } catch (error) {
        console.error("Error creating seed data:", error);
    }
};

createSeeder();





