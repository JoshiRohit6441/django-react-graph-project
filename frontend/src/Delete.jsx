import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

function Delete({ hide, resp }) {
  const deleteData = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/energydata/${id}/`);
      toast.success("Data deleted successfully");
      hide();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="delete-main">
        <h1>Are you sure you want to delete this data?</h1>
        <div>
          <button
            className="delete-button"
            onClick={() => {
              deleteData(resp.id);
            }}
          >
            Delete
          </button>
        </div>
        <div>
          <button className="cancel-button" onClick={hide}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Delete;
