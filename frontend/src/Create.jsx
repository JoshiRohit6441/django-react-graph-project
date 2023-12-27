import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create() {
  const history = useNavigate();

  let [data, setdata] = useState({
    end_year: "",
    intensity: "",
    sector: "",
    topic: "",
    insight: "",
    url: "",
    region: "",
    start_year: "",
    impact: "",
    added: "",
    published: "",
    country: "",
    relevance: "",
    pestle: "",
    source: "",
    title: "",
    likelihood: "",
  });

  const formatDate = (date) => {
    if (!date) {
      return null;
    }
    const formattedDate = new Date(date).toISOString().slice(0, 16);
    return formattedDate;
  };

  const addData = (event) => {
    const { name, value } = event.target;

    if (name === "added" || name === "published") {
      setdata({
        ...data,
        [name]: value ? formatDate(value) : null,
      });
    } else {
      setdata({
        ...data,
        [name]: value,
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/energydata/", data)
      .then((resp) => {
        toast.success("Data successfully added");
        history("/table");
      })
      .catch((error) => {
        toast.error("Something went wrong", error);
        console.log(error)
      });
  };

  return (
    <>
      <div className="create_main">
        <form className="custum_form_body">
          <h1>Create Data</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              End Year
            </label>
            <input
              type="text"
              className="form-control form_custum"
              onChange={addData}
              name="end_year"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Intensity
            </label>
            <input
              type="number"
              name="intensity"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Sector
            </label>
            <input
              type="text"
              name="sector"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Topic
            </label>
            <input
              type="text"
              name="topic"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Insight
            </label>
            <input
              name="insight"
              type="text"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              URL
            </label>
            <input
              name="url"
              type="text"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Region
            </label>
            <input
              name="region"
              type="text"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Start Year
            </label>
            <input
              type="text"
              className="form-control form_custum"
              onChange={addData}
              name="start_year"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Impact
            </label>
            <input
              type="text"
              name="impact"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Added
            </label>
            <input
              type="datetime-local"
              className="form-control form_custum"
              onChange={addData}
              name="added"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Published
            </label>
            <input
              type="datetime-local"
              name="published"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="country"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Relevance
            </label>
            <input
              type="number"
              name="relevance"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Pestle
            </label>
            <input
              type="text"
              name="pestle"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Source
            </label>
            <input
              type="text"
              name="source"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Likelihood
            </label>
            <input
              type="number"
              name="likelihood"
              className="form-control form_custum"
              onChange={addData}
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitData}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
