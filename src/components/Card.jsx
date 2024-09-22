import React, { useState } from 'react';

const Card = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name && !birthDate){
            alert('Заполните все поля!');
            return; 
        }else{
            onSubmit({ name, birthDate });
            setName('');
            setBirthDate('');
        }
    };


    return (
        <div className="card">
            <h2>Основные сведения</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>ФИО:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Дата рождения:</label>
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default Card;
