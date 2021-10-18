import React from "react";
import "./ProgramCard.css";

export default function ProgramCard({
  programDetail,
  selected,
  addToCompare,
  removeFromCompare,
}) {
  return (
    <div className="one-program">
      <a href={programDetail.programLink} target="_blank" rel="noreferrer">
        <div className="organisation-thumbnail">
          <img src={programDetail.image} alt="Organisation" />
        </div>
      </a>
      <p>{programDetail.organisationName}</p>

      {/* Display "Compare button" if the item is NOT added to the array */}
      {/* Display "Remove button if the item is ADDED to the array" */}
      {selected && selected.includes(programDetail) ? (
        // OnClick set to call removeFromCompare function
        <button
          className="remove-button"
          onClick={() => removeFromCompare(programDetail)}
        >
          Remove
        </button>
      ) : (
        // OnClick set to call addToCompare function
        <button
          className="compare-button"
          onClick={() => addToCompare(programDetail)}
        >
          Add
        </button>
      )}
    </div>
  );
}
