import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GuestList from "./GuestList";
import { defaultGuestsList } from "./models/guest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CreateGuestModal from "./createGuestModal";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [guests, setGuests] = useState(defaultGuestsList);

  const createGuest = (guest) => {
    const newGuests = [...guests];
    newGuests.push(guest);
    setGuests(newGuests);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    let eventValue = e.target.value.toLowerCase();
    if (e.target.value !== "") {
      setGuests(
        defaultGuestsList.filter((guest) => {
          let newGuestName = guest.name.toLowerCase();
          let newGuestEmail = guest.email.toLowerCase();

          return (
            newGuestName.includes(eventValue) ||
            newGuestEmail.includes(eventValue)
          );
        })
      );
    } else {
      setGuests(defaultGuestsList);
    }
  };

  const handleRemoveGuest = (e, id) => {
    e.stopPropagation();
    const newGuests = [...guests].filter((guest) => guest.id !== id);
    setGuests(newGuests);
  };

  return (
    <main className="guestList-wrapper mx-auto mt-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div>
            <div className="header-text text-container">
              <h4>Guest List</h4>
              <p>Watch and manage your guest list</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="px-3">
              <Form className="search_form">
                <div className="searchbarContainer px-2">
                  <label
                    id="search-icon"
                    htmlFor="searchInput"
                    className="d-inline"
                  >
                    <FontAwesomeIcon icon={faSearch} color="#B1DEFF" />
                  </label>
                  <input
                    value={searchValue}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search"
                    className="search_input px-2"
                    aria-label="Search"
                    id="searchInput"
                  />
                </div>
              </Form>
            </div>
            <div className="text-center">
              <CreateGuestModal
                handleCreateFormSubmit={createGuest}
                id="create-button"
                className="w-75"
              >
                Add
              </CreateGuestModal>
            </div>
          </div>
        </div>
      </div>

      <Table id="guestListTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Event name</th>
            <th>Mail</th>
            <th>Ticket type</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <GuestList guests={guests} handleRemoveGuest={handleRemoveGuest} />
        </tbody>
      </Table>
    </main>
  );
};

export default App;
