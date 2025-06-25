import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Typography, Checkbox } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Datacleanpopup({ setshow, popupdata, handleAddRows }) {
    const [data, setdata] = useState(popupdata);
    const [selectedRows, setSelectedRows] = useState([]);
    const navigate = useNavigate();

    const handleCheckboxChange = (id) => {
        setSelectedRows((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((rowId) => rowId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleAdd = () => {
        const newEntities = selectedRows.map((id) => {
            const selectedData = data.find((e) => e.id === id);
            return {
                id: selectedData.id,
                name: selectedData.names.join(", "),
                description: selectedData.standardization, // Adjust based on your data structure
                fileUrl: selectedData.dataType, // Adjust based on your data structure
                createdBy: JSON.parse(localStorage.getItem('loggedInUser')).username // Get username from localStorage
            };
        });

        handleAddRows(newEntities); // Call the parent component's function to add the selected rows
        setshow(false); // Close the popup
        navigate('/dashboard');
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "110px", position: "absolute", top: "100px", left: "500px", backgroundColor: "white" }}>
            <div style={{ padding: "25px", width: "796px", minHeight: "432px" }}>
                <h2>Entity Details</h2>
                {data &&
                    data.map((e) => (
                        <div key={e.id}>
                            <p style={{ borderTop: "1px solid grey", opacity: "0.5" }}></p>
                            <div style={{ display: "flex" }}>
                                <Checkbox
                                    className="data-checkbox"
                                    checked={selectedRows.includes(e.id)}
                                    onChange={() => handleCheckboxChange(e.id)}
                                />
                                <p style={{ color: "grey", fontSize: "20px", padding: "10px" }}>{e.id}, {e.names.join(", ")}, {e.dataType}, {e.standardization}</p>
                            </div>
                        </div>
                    ))
                }
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd} // Call handleAdd on button click
                    >
                        Add
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => setshow(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}
