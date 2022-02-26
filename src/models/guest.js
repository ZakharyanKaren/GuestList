export class GuestModel {
  constructor(
    id,
    name,
    eventName,
    email,
    ticketType,
    status,
    phoneNumber,
    address,
    comments
  ) {
    this.id = id;
    this.name = name;
    this.eventName = eventName;
    this.email = email;
    this.ticketType = ticketType;
    this.status = status;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.comments = comments;
  }
}

export const defaultGuestsList = [
  new GuestModel(
    Math.random().toString(16).slice(2),
    "Savannah Nyugen",
    "Jazz concert",
    "wdjwadn@gmail.com",
    1,
    2,
    "+37412345678",
    "Arshakunyats ave.5",
    "lorem ipsum dolor sit amet"
  ),
];
