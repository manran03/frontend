import React from 'react';
import { useParams } from 'react-router-dom';
import advidata from "./advi.json";

function AdvClProfile() {
    // Extracting the advisor ID from the URL params
    const { advisor_id } = useParams();

    // Finding the corresponding advisor object from the data
    const advisor = advidata.listOfNamesOfAdvisors.find(advisor => advisor._id === advisor_id);

    return (
        <div>
            {/* Displaying the advisor name */}
            <h1>Advisor Name: {advisor ? advisor.name : "Unknown"}</h1>
            {/* You can display other details of the advisor here */}
        </div>
    );
}

export default AdvClProfile ;