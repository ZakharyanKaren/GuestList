import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/fontawesome-free-solid";

const GuestList = ({ guests, handleRemoveGuest }) => {
  return guests.map((guest) => (
    <Guest
      key={"guest_" + guest.id}
      guest={guest}
      handleRemoveGuest={(e, id) => handleRemoveGuest(e, guest.id)}
    />
  ));
};

const Guest = ({ guest, handleRemoveGuest }) => {
  const [isOpen, setIsOpen] = useState(false);
  let ticketType = "";
  let status = "";
  let statusColorClass = "";

  switch (guest.ticketType) {
    case 1:
      ticketType = "VIP";
      break;
    case 2:
      ticketType = "VIP Exclusive";
      break;
  }

  switch (guest.status) {
    case 1:
      status = "Paid";
      statusColorClass = "text-success";
      break;
    case 2:
      status = "Unpaid";
      statusColorClass = "text-danger";
      break;
    case 3:
      status = "Pending";
      statusColorClass = "text-warning";
      break;
  }

  let actions = "";
  if (isOpen) {
    actions = (
      <div>
        <FontAwesomeIcon icon="fa-solid fa-angle-up" />
        <p>See less </p>
      </div>
    );
  } else {
    actions = (
      <div>
        <FontAwesomeIcon icon="fa-solid fa-angle-down" />
        <p>See more</p>
      </div>
    );
  }

  return (
    <>
      <tr onClick={() => setIsOpen(!isOpen)}>
        <td>{guest.name}</td>
        <td>{guest.eventName}</td>
        <td>{guest.email}</td>
        <td>{ticketType}</td>
        <td className={statusColorClass}>{status}</td>
        <td>
          <div className="text-center">{actions}</div>
        </td>
        <td className="text-center">
          <button
            onClick={handleRemoveGuest}
            className="bg-transparent text-danger border-0"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
      <tr style={{ display: `${isOpen ? "table-row" : "none"}` }}>
        <td colSpan="100%">
          <strong>Phone number</strong>
          <p>{guest.phoneNumber}</p>
          <strong>Address</strong>
          <p>{guest.address}</p>
          <strong>Comments</strong>
          <p>{guest.comments}</p>
        </td>
      </tr>
    </>
  );
};

export default GuestList;
