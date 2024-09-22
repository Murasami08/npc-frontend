import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CitizenList = ({ citizens, onSelectCitizen }) => {
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    const filteredCitizens = citizens.filter(citizen =>
        citizen.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleSelectCitizen = (citizen) => {
        onSelectCitizen(citizen);
        navigate('/detail');
    };

    return (
        <div className="citizen-directory">
            <h2>Картотека граждан</h2>
            <input
                type="text"
                placeholder="Поиск по ФИО"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredCitizens.map((citizen, index) => (
                    <li key={index} onClick={() => handleSelectCitizen(citizen)}>
                        {citizen.name}
                    </li>
                ))}
            </ul>
            <p>Всего граждан: {filteredCitizens.length}</p>
        </div>
    );
};

export default CitizenList;
