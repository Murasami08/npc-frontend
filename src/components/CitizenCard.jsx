import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../img/consultant.png';
const CitizenCard = ({ citizen }) => {
    const navigate = useNavigate();

    if (!citizen) return <div>Выберите гражданина для просмотра деталей</div>;

    return (
        <div className="citizen-detail">
            <h3>Информация о гражданине</h3>
            <img src={img} alt="" />
            <p>ФИО: {citizen.name}</p>
            <p>Дата рождения: {citizen.birthDate}</p>
            <h4>Члены семьи:</h4>
            <ul>
                {citizen.familyMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <button onClick={() => navigate('/directory')}>Назад к картотеке граждан</button>
        </div>
    );
};

export default CitizenCard;
