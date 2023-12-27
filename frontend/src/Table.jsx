import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import SearchIcon from "@mui/icons-material/Search";
import Delete from "./Delete";
import Edit from "./Edit";
function Table() {
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [search, setSearch] = useState("");
  const [deletepop, setDeletePop] = useState(false);
  const [editepop, seteditPop] = useState(null);

  const fetchData = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/energydata");
      setData(response.data);
      setFilterdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchItem = event.target.value;

    setSearch(searchItem);

    let filteritem = data.filter((val) => {
      return (
        String(val.end_year).includes(searchItem) ||
        String(val.intensity).includes(searchItem) ||
        String(val.relevance).includes(searchItem) ||
        String(val.likelihood).includes(searchItem) ||
        val.topic.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.sector.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.source.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.region.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.insight.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.url.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.start_year.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.impact.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.added.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.published.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.pestle.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        val.country.toLowerCase().includes(searchItem.toLowerCase())
      );
    });

    setFilterdata(filteritem);
  };

  const showDelete = () => {
    setDeletePop(true);
  };
  const hideDelete = () => {
    setDeletePop(false);
  };
  const showEdit = (energy) => {
    seteditPop(energy.id);
  };
  const hideedit = () => {
    seteditPop(null);
  };

  return (
    <>
      <div className="table_main">
        <div className="input_div">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
          <span className="tooltiptext">
            Search with :end_year,topic,sector,source,region country
          </span>
        </div>
        <div className="table-responsive table_main_div">
        <table className="table table-warning table-striped">
          <thead>
            <tr className="text">
              <th>#</th>
              <th>end_year</th>
              <th>intensity</th>
              <th>sector</th>
              <th>topic</th>
              <th>insight</th>
              <th>url</th>
              <th>region</th>
              <th>start_year</th>
              <th>impact</th>
              <th>added</th>
              <th>published</th>
              <th>country</th>
              <th>relevance</th>
              <th>pestle</th>
              <th>source</th>
              <th>title</th>
              <th>likelihood</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            {filterdata.map((val) => {
              return (
                <tr key={val.id}>
                  <th>{val.id}</th>
                  <td>{val.end_year}</td>
                  <td>{val.intensity}</td>
                  <td>{val.sector}</td>
                  <td>{val.topic}</td>
                  <td>{val.insight}</td>
                  <td>{val.url}</td>
                  <td>{val.region}</td>
                  <td>{val.start_year}</td>
                  <td>{val.impact}</td>
                  <td>{val.added}</td>
                  <td>{val.published}</td>
                  <td>{val.country}</td>
                  <td>{val.relevance}</td>
                  <td>{val.pestle}</td>
                  <td>{val.source}</td>
                  <td>{val.title}</td>
                  <td>{val.likelihood}</td>
                  <td>
                    <div className="options">
                      <div>
                        <button
                          className="editButton"
                          onClick={(e) => showEdit(val)}
                        >
                          <EditIcon />
                        </button>
                        {editepop === val.id && (
                          <Edit hide={hideedit} response={val} />
                        )}
                      </div>
                      <div>
                        <button className="deleteButton" onClick={showDelete}>
                          <DeleteIcon />
                        </button>
                        {deletepop && <Delete hide={hideDelete} resp={val} />}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default Table;
