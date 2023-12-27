import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Edit({ hide, response }) {
  let [editData, setEditData] = useState({
    end_year: response.end_year,
    intensity: response.intensity,
    sector: response.sector,
    topic: response.topic,
    insight: response.insight,  // Corrected typo here
    url: response.url,
    region: response.region,
    start_year: response.start_year,
    impact: response.impact,
    added: response.added,
    published: response.published,
    country: response.country,
    relevance: response.relevance,
    pestle: response.pestle,
    source: response.source,
    title: response.title,
    likelihood: response.likelihood,
  });

  let edit = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const EditData = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/energydata/${response.id}/`, editData)
      .then(() => {
        toast.success("Data edited successfully");
        hide();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <div className="edit_main">
        <button className="close_btn_edit" onClick={hide}>
          X
        </button>
        <form className="custum_form_edit_body">
          <div className="mb-3">
            <label htmlFor="exampleInputend_year" className="form-label">
              End Year
            </label>
            <input
              type="text"
              className="form-control form_custum"
              onChange={edit}
              name="end_year"
              value={editData.end_year}
              id="exampleInputend_year"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputintensity" className="form-label">
              intensity
            </label>
            <input
              type="number"
              value={editData.intensity}
              className="form-control form_custum"
              onChange={edit}
              name="intensity"
              id="exampleInputintensity"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputsector" className="form-label">
              sector
            </label>
            <input
              type="text"
              value={editData.sector}
              className="form-control form_custum"
              onChange={edit}
              name="sector"
              id="exampleInputsector"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputtopic" className="form-label">
              topic
            </label>
            <input
              type="text"
              value={editData.topic}
              className="form-control form_custum"
              onChange={edit}
              name="topic"
              id="exampleInputtopic"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputinsight" className="form-label">
              insight
            </label>
            <input
              value={editData.insight}
              type="text"
              className="form-control form_custum"
              onChange={edit}
              name="insight"
              id="exampleInputinsight"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputurl" className="form-label">
              URL
            </label>
            <input
              value={editData.url}
              type="text"
              className="form-control form_custum"
              onChange={edit}
              name="url"
              id="exampleInputurl"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputregion" className="form-label">
              Region
            </label>
            <input
              value={editData.region}
              type="text"
              className="form-control form_custum"
              onChange={edit}
              name="region"
              id="exampleInputregion"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputstart_year" className="form-label">
              Start Year
            </label>
            <input
              type="text"
              className="form-control form_custum"
              onChange={edit}
              name="start_year"
              value={editData.start_year}
              id="exampleInputstart_year"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputimpact" className="form-label">
              Impact
            </label>
            <input
              type="text"
              value={editData.impact}
              className="form-control form_custum"
              onChange={edit}
              name="impact"
              id="exampleInputimpact"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputadded" className="form-label">
              Added
            </label>
            <input
              type="datetime-local"
              className="form-control form_custum"
              onChange={edit}
              name="added"
              value={editData.added}
              id="exampleInputadded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputpublished" className="form-label">
              Published
            </label>
            <input
              type="datetime-local"
              value={editData.published}
              className="form-control form_custum"
              onChange={edit}
              name="published"
              id="exampleInputpublished"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcountry" className="form-label">
              Country
            </label>
            <input
              type="text"
              value={editData.country}
              className="form-control form_custum"
              onChange={edit}
              name="country"
              id="exampleInputcountry"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputrelevance" className="form-label">
              Relevance
            </label>
            <input
              type="number"
              value={editData.relevance}
              className="form-control form_custum"
              onChange={edit}
              name="relevance"
              id="exampleInputrelevance"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPestle" className="form-label">
              Pestle
            </label>
            <input
              type="text"
              value={editData.pestle}
              className="form-control form_custum"
              onChange={edit}
              name="pestle"
              id="exampleInputPestle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputsource" className="form-label">
              Source
            </label>
            <input
              type="text"
              value={editData.source}
              className="form-control form_custum"
              onChange={edit}
              name="source"
              id="exampleInputsource"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputtitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={editData.title}
              className="form-control form_custum"
              onChange={edit}
              name="title"
              id="exampleInputtitle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputlikelihood" className="form-label">
              Likelihood
            </label>
            <input
              type="number"
              value={editData.likelihood}
              className="form-control form_custum"
              onChange={edit}
              name="likelihood"
              id="exampleInputlikelihood"
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={EditData}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit;
