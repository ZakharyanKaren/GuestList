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
    "felicia.reid@example.com",
    1,
    1,
    "+3755000000",
    "Arshakunyats Ave. 5",
    "Something about event's comment"
  ),
  new GuestModel(
    Math.random().toString(16).slice(2),
    "Savannah Nyugen",
    "Jazz concert",
    "felicia.reid@example.com",
    2,
    2,
    "+3755000000",
    "Arshakunyats Ave. 5",
    "Something about event's comment"
  ),
  new GuestModel(
    Math.random().toString(16).slice(2),
    "Savannah Nyugen",
    "Jazz concert",
    "felicia.reid@example.com",
    1,
    3,
    "+3755000000",
    "Arshakunyats Ave. 5",
    "Something about event's comment"
  ),
];
