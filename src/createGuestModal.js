import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GuestModel } from "./models/guest";

function CreateGuestModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState(1);
  const [status, setStatus] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");

  const handleSave = () => {
    const guest = new GuestModel(
      Math.random().toString(16).slice(2),
      name,
      eventName,
      email,
      ticketType,
      status,
      phoneNumber,
      address,
      comments
    );
    props.handleCreateFormSubmit(guest);
    setName("");
    setEventName("");
    setEmail("");
    setTicketType(1);
    setStatus(1);
    setPhoneNumber("");
    setAddress("");
    setComments("");
    handleClose();
  };

  return (
    <>
      <Button id="create-button" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form method="post" action="#" id="createGuestForm">
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eventName" className="form-label">
                  Event name:
                </label>
                <input
                  onChange={(e) => setEventName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="eventName"
                  value={eventName}
                />
              </div>
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
                value={email}
              />
            </div>
            Ticket Type:
            <div className="form-check">
              <input
                onChange={() => setTicketType(1)}
                className="form-check-input"
                type="radio"
                name="ticketType"
                id="ticketTypeVip"
                value="1"
                checked={ticketType === 1}
              />
              <label className="form-check-label" htmlFor="ticketTypeVip">
                VIP
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={() => setTicketType(2)}
                className="form-check-input"
                type="radio"
                name="ticketType"
                id="ticketTypeExclusive"
                value="2"
                checked={ticketType === 2}
              />
              <label className="form-check-label" htmlFor="ticketTypeExclusive">
                VIP exclusive
              </label>
            </div>
            Status:
            <div className="form-check">
              <input
                onChange={() => setStatus(1)}
                className="form-check-input"
                type="radio"
                name="status"
                id="statusPaid"
                value="1"
                checked={status === 1}
              />
              <label className="form-check-label" htmlFor="statusPaid">
                Paid
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={() => setStatus(2)}
                className="form-check-input"
                type="radio"
                name="status"
                id="statusUnPaid"
                value="2"
                checked={status === 2}
              />
              <label className="form-check-label" htmlFor="statusUnPaid">
                Unpaid
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={() => setStatus(3)}
                className="form-check-input"
                type="radio"
                name="status"
                id="statusPending"
                value="3"
                checked={status === 3}
              />
              <label className="form-check-label" htmlFor="statusPending">
                Pending
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="form-control"
                id="phone"
                value={phoneNumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                id="address"
                value={address}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">
                Comments:
              </label>
              <textarea
                onChange={(e) => setComments(e.target.value)}
                className="form-control"
                id="comments"
                value={comments}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateGuestModal;
