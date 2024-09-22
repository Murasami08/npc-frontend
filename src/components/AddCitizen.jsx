import React, { useState } from 'react';
import Table from './Table';
import Card from './Card';
const AddCitizen = () => {
    const [data, setData] = useState([]);

    const handleAddData = (newData) => {
        setData([...data, newData]);
    };

    return (
        <div className="add-main">
            <h1>Учет параметров</h1>
            <Card onSubmit={handleAddData} />
            <Table data={data} />
        </div>
    );
};

export default AddCitizen;
