import db from '../utils/connection.js'; // Koneksi Sequelize
import User from './UserModels.js';
import Concert from './ConcertModels.js';
import Venue from './VenueModels.js';
import TicketType from './TicketTypeModel.js';
import Order from './OrderModels.js';
import OrderDetails from './OrderDetailsModel.js';
import Payment from './PaymentModels.js';
import Artist from './ArtistModels.js';
import Ticket from './TicketModels.js';
import ConcertArtist from './ConcertArtistModels.js';

// Import associations.js untuk mendefinisikan relasi antar model
import '../models/associations.js'; // Ini akan secara otomatis menjalankan kode di associations.js

// Ekspor semua model agar bisa digunakan di file lain
export {
  db,
  User,
  Concert,
  Venue,
  TicketType,
  Order,
  OrderDetails,
  Payment,
  Artist,
  Ticket,
  ConcertArtist,
};




