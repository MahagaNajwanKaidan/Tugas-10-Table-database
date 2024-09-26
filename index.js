import express from 'express';
import db from './utils/connection.js';
import User from './models/UserModels.js';
import Concert from './models/ConcertModels.js';
import Venue from './models/VenueModels.js';
import TicketType from './models/TicketTypeModel.js';
import Order from './models/OrderModels.js';
import OrderDetails from './models/OrderDetailsModel.js';
import Payment from './models/PaymentModels.js';
import Artist from './models/ArtistModels.js';
import Ticket from './models/TicketModels.js';
import ConcertArtist from './models/ConcertArtistModels.js';

const app = express();


// Middleware
app.use(express.json());
await db.sync();

app.listen(process.env.PORT,()=>{
    console.log('localhost berjalan')
})
