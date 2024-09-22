import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CitizenCard from '../components/CitizenCard';
import CitizenList from '../components/CitizenList';
import AddCitizen from '../components/AddCitizen';
import Table from '../components/Table';
const Home = () => {
    const [data, setData] = useState([]);

    const handleAddData = (newData) => {
        setData([...data, newData]);
    };
    const [selectedCitizen, setSelectedCitizen] = useState(null);
    const citizens = [
        { name: 'Иванов Иван', birthDate: '1990-01-01', familyMembers: ['Иванова Мария'] },
        { name: 'Петров Петр', birthDate: '1985-05-05', familyMembers: ['Петрова Анна'] },
        { name: 'Сергеев Сергей', birthDate: '1995-03-03', familyMembers: ['Сергеева Снежана'] },
        { name: 'Дмитриев Дмитрий', birthDate: '1988-08-08', familyMembers: ['Дмитриева Дарья'] },
    ];

    return (
        <div className="home">
             <Router>
                <nav className="head">
                <Link to="/directory" className='link'>Картотека граждан</Link>
            <Link to="/dashboard" className='link'>Dashboard</Link>
            <Link to="/addcitizen" className='link'>Добавить гражданина</Link>
            <Link to="/table" className='link'>Таблица граждан</Link>
            <Link to="/" className='link'>Home</Link>
                </nav>
                <div className="main-page">
                <Routes>
                    <Route
                        path="/directory"
                        element={
                            <CitizenList citizens={citizens} onSelectCitizen={setSelectedCitizen} />
                        }
                    />
                    <Route
                        path="/detail"
                        element={<CitizenCard citizen={selectedCitizen} />}
                    />
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/addcitizen"
                        element={<AddCitizen handleAddData={handleAddData} />}
                    />
                    <Route
                        path="/table"
                        element={<Table data={data} />}
                    />
                </Routes>
            </div>
        </Router>
          
        </div>
    );
};

export default Home;
