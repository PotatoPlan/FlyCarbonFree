import React, { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import { Table, Dropdown, Popup } from "semantic-ui-react";
import addOffsetPrograms from "../data/addOffsetPrograms";
import { BsInfoCircle } from "react-icons/bs";
import "./Comparison.css";

export default function Comparison({ programs }) {
  useEffect(() => {
    document.title = "Fly Carbon Free - Comparison";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Populate the selectedItems, empty array as default
  const [selectedItems, setSelectedItems] = useState([]);
  const [toResult, setToResult] = useState(false);
  const [compareError, setCompareError] = useState("");

  // Add this "item" to the array of selectedItems
  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [item, ...selectedItems]);
  };

  // Remove this "item" from the array if the ID does not match
  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (theItem) => theItem.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  console.log(selectedItems);

  // Function handle that user add a new organisation from the table
  function handleAddFromTable(organisationID) {
    // A little validation here:
    // If the organisationID (the organisation that the user wants to add) has already existed in the array, then do not add it.
    // Here using Array.some() function to check if the given value has already existed in an array of objects
    if (
      !selectedItems.some((selectItem) => selectItem["id"] === organisationID)
    )
      // If this passes the validation, call the addToCompare function, find the equal id organisation and take it out from the array and then add it
      addToCompare(...programs.filter((itm) => itm.id === organisationID));
  }

  if (!programs) {
    return <div className="comparison-load-error">Please wait...</div>;
  }

  if (toResult === true) {
    return (
      <div className="program-result-container">
        {/* Heading */}
        <div className="program-heading">
          <h1>Carbon Offset Program Comparison</h1>
          <p>
            Choose the organisation you want to know about and compare their
            Carbon Offset Programs
          </p>
        </div>

        <div>
          <p style={{ marginBottom: "10px" }}>+ Add an organisation</p>
          <div className="comparison-dropdown">
            <Dropdown
              name="addOrganisaton"
              placeholder="Add an organisation"
              fluid
              search
              selection
              options={addOffsetPrograms}
              onChange={(event, data) => handleAddFromTable(data.value)}
              // [data.value - 1]  this will match the index and id, but in the addOffsetPrograms and offsetPrograms, id data type must equal
            />
          </div>
        </div>

        {/* This table will only appear when users has selected at least one program */}
        {selectedItems.length > 0 && (
          <div>
            <Table celled structured>
              <Table.Header className="table-head">
                <Table.Row>
                  <Table.HeaderCell rowSpan="2">
                    <h3>Organisation</h3>
                  </Table.HeaderCell>

                  <Table.HeaderCell rowSpan="2">
                    <h3>Program Name</h3>
                  </Table.HeaderCell>

                  <Table.HeaderCell rowSpan="2">
                    <Popup
                      trigger={
                        <h3>
                          Certified by <BsInfoCircle />
                        </h3>
                      }
                      wide
                      style={{ fontSize: "0.8em" }}
                    >
                      The program is audited and certified by this organisation
                    </Popup>
                  </Table.HeaderCell>

                  <Table.HeaderCell rowSpan="2">
                    <Popup
                      trigger={
                        <h3>
                          How it works <BsInfoCircle />
                        </h3>
                      }
                      wide
                      style={{
                        lineHeight: "1.5em",
                        fontSize: "0.9em",
                        textAlign: "justify",
                      }}
                    >
                      <p style={{ paddingBottom: "3px" }}>
                        <strong>Part of booking:</strong> money already included
                        for offsetting along with the ticket purchase
                      </p>
                      <p style={{ paddingBottom: "3px" }}>
                        <strong>Separate:</strong> money to be paid optionally
                        for their offset program
                      </p>
                      <p style={{ paddingBottom: "3px" }}>
                        <strong>Third party:</strong> money to be paid
                        separately to the offset program owned by a third party
                      </p>
                    </Popup>
                    {/* <p>Part of booking: purchase during booking</p>
                    <p>Separate: extra purchase</p>
                    <p>Third party: offered by a third party organisation</p> */}
                  </Table.HeaderCell>

                  <Table.HeaderCell rowSpan="2">
                    <Popup
                      trigger={
                        <h3>
                          Price <BsInfoCircle />
                        </h3>
                      }
                      wide
                      style={{ fontSize: "0.8em" }}
                    >
                      <p>
                        Amount of money contributed towards the offset program
                      </p>
                    </Popup>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {/* Mapping selected items to the table row (the number of selected items will be the number of rows) */}
                {selectedItems.map((selected) => (
                  <Table.Row key={selected.id}>
                    <Table.Cell className="selected-organisation">
                      <div className="selected-organisation-logo-container">
                        <img
                          className="selected-organisation-logo"
                          src={selected.image}
                          alt="Organisation"
                        />
                      </div>
                      <button
                        className="to-remove-organisation"
                        onClick={() => removeFromCompare(selected)}
                      >
                        Remove
                      </button>{" "}
                    </Table.Cell>

                    <Table.Cell>{selected.programName}</Table.Cell>

                    <Table.Cell>{selected.certifiedBy}</Table.Cell>

                    <Table.Cell>{selected.howItWorks}</Table.Cell>

                    <Table.Cell>${selected.price}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}

        <div className="to-back-button-container">
          <button
            onClick={() => {
              setToResult(false);
              setCompareError("");
            }}
            className="to-back-button"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // If no selection has been made
  return (
    <div className="program-container">
      {/* Heading */}
      <div className="program-heading">
        <h1>Carbon Offset Program Comparison</h1>
        <p>
          Choose the organisation you want to know about and compare their
          Carbon Offset Programs
        </p>
      </div>

      {/* Confirm button ONLY appears when the user has selected at least one card */}
      {selectedItems.length > 0 ? (
        <div className="compare-confirm">
          <button
            onClick={() =>
              selectedItems.length > 0
                ? setToResult(true)
                : setCompareError("Please select at least one organisation")
            }
            className="to-compare-button"
          >
            Compare
          </button>
          <p style={{ color: "#c73333" }}>{compareError}</p>
        </div>
      ) : (
        <div></div>
      )}

      <div className="organisation-container">
        {programs.map((program, index) => (
          <ProgramCard
            key={program.id}
            programDetail={program}
            selected={selectedItems}
            addToCompare={addToCompare}
            removeFromCompare={removeFromCompare}
          />
        ))}
      </div>
    </div>
  );
}
