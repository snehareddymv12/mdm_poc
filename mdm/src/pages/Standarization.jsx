import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../style/datatable.css";
import Datacleanpopup from "./Datacleanpopup";
import Navbar from '../pages/NavBar';
import { useLocation } from 'react-router-dom';

const Standardization = () => {
  const location = useLocation();
  const { labelName, description } = location.state || { labelName: '', description: '' };

  const [rows, setRows] = useState([
    { id: 1, names: [labelName], dataType: "String", standardization: "Uppercase" },
    // { id: 2, names: [], dataType: "Integer", standardization: "Round" },
    // { id: 3, names: [], dataType: "Date", standardization: "MM/DD/YYYY" },
    // { id: 4, names: [], dataType: "Boolean", standardization: "True/False" },
    // { id: 5, names: [], dataType: "Float", standardization: "Two decimal places" }
  ]);

  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleFinish = () => {
    const filteredData = rows.filter((row) => selectedRows.includes(row.id));
    setPopupData(filteredData);
    setShow(true);
  };

  const handleAddRows = (rowsToAdd) => {
    const newRows = rowsToAdd.map(row => ({
      id: row.id,
      names: row.names,
      dataType: row.dataType,
      standardization: row.standardization,
    }));

    // Assuming you have a function to add these rows to your dashboard or state
    // This could be a call to a Redux action or a state update
    console.log('Adding rows to dashboard:', newRows);

    setSelectedRows(selectedRows.filter(id => !rowsToAdd.includes(id)));

    // Optionally, clear the popup data after adding
    setPopupData([]);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, marginTop: "4rem", marginLeft: "7rem" }}>
          <h1 style={{ color: "black", fontWeight: "inherit" }}>
            Choose the tables you want to sync
          </h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "64px",
              width: "100%",
              backgroundColor: "#f7f9fc",
              border: "1px solid #d1d5db",
            }}
          >
            <Typography
              sx={{
                color: "#374151",
                fontWeight: 700,
                letterSpacing: "0.05em",
                fontSize: "16px",
              }}
            >
              TABLENAME
            </Typography>
          </Box>

          <div className="data-table-container">
            {rows.map((row, index) => (
              <Box key={index} className="data-row">
                <Checkbox
                  className="data-checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
                {row.names.map((name, nameIndex) => (
                  <Typography
                    key={nameIndex}
                    className="column-name"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginLeft: "30px",
                      marginRight: "28rem",
                    }}
                  >
                    {name}
                  </Typography>
                ))}

                {/* DataType Accordion */}
                <Accordion
                  style={{
                    width: "24%",
                    marginRight: "10rem",
                    backgroundColor: "#C8C3C3",
                  }}
                  className="accordion"
                >
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls={`panel1-content-${index}`}
                    id={`panel1-header-${index}`}
                  >
                    <Typography>{row.dataType}</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>

                {/* Standardization Accordion */}
                <Accordion
                  style={{
                    width: "30%",
                    marginRight: "16px",
                    backgroundColor: "#C8C3C3",
                  }}
                  className="accordion"
                >
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls={`panel2-content-${index}`}
                    id={`panel2-header-${index}`}
                  >
                    <Typography>{row.standardization}</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </div>
          <hr style={{ marginTop: "7rem", backgroundColor: " #d1d5db" }} />
          <div
            style={{
              marginTop: "3px",
              display: "flex",
              gap: "6px",
              flexDirection: "row",
            }}
          >
            <Checkbox className="data-checkbox" />
            <Typography
              sx={{
                color: "gray",
                fontFamily: "inherit",
                marginTop: "5px",
                fontWeight: "bold",
                fontSize: "21px",
              }}
            >
              Are you sure you want to drop all null rows?
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "14%",
              padding: "10px",
              marginTop: "16px",
              marginLeft: "15px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={handleFinish}
          >
            Finish
          </div>
        </div>
        {show && <div className="overlay" />}
        {/* Popup Component */}
        {show && (
          <Datacleanpopup
            setshow={setShow}
            popupdata={popupData}
            handleAddRows={handleAddRows} // Pass the new add function
          />
        )}
      </div>
    </>
  );
};

export default Standardization;
