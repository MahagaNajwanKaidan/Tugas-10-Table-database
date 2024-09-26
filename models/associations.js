import User from './UserModels.js';
import Venue from './VenueModels.js';
import TicketType from './TicketTypeModel.js';
import Ticket from './TicketModels.js';
import Payment from './PaymentModels.js';
import Order from './OrderModels.js';
import OrderDetails from './OrderDetailsModel.js';
import Concert from './ConcertModels.js';
import ConcertArtist from './ConcertArtistModels.js';
import Artist from './ArtistModels.js';

// Relasi User - Order
User.hasMany(Order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'UserId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Order - Payment
Order.hasOne(Payment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Payment.belongsTo(Order, { foreignKey: 'OrderId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Order - OrderDetails
Order.hasMany(OrderDetails, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderDetails.belongsTo(Order, { foreignKey: 'OrderId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi TicketType - OrderDetails
TicketType.hasMany(OrderDetails, {  onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderDetails.belongsTo(TicketType, { foreignKey: 'TicketTypeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi TicketType - Ticket
TicketType.hasMany(Ticket, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Ticket.belongsTo(TicketType, { foreignKey: 'TicketTypeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Order - Ticket
Order.hasMany(Ticket, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Ticket.belongsTo(Order, { foreignKey: 'OrderId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Concert - Venue
Concert.belongsTo(Venue, { foreignKey: 'VenueId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Venue.hasMany(Concert, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Concert - ConcertArtist
Concert.hasMany(ConcertArtist, {  onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ConcertArtist.belongsTo(Concert, { foreignKey: 'ConcertId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relasi Artist - ConcertArtist
Artist.hasMany(ConcertArtist, {  onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ConcertArtist.belongsTo(Artist, { foreignKey: 'ArtistId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// export { User, Venue, TicketType, Ticket, Payment, Order, OrderDetails, Concert, ConcertArtist, Artist };

