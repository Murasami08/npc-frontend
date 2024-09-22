import React from 'react';

const Table = ({ data }) => {
    const citizens = [
        { name: 'Иванов Иван', birthDate: '1990-01-01', familyMembers: ['Иванова Мария'] },
        { name: 'Петров Петр', birthDate: '1985-05-05', familyMembers: ['Петрова Анна'] },
        { name: 'Сергеев Сергей', birthDate: '1995-03-03', familyMembers: ['Сергеева Снежана'] },
        { name: 'Дмитриев Дмитрий', birthDate: '1988-08-08', familyMembers: ['Дмитриева Дарья'] },
    ];
    return (
        <div className='Table-main'>
            <h1>Таблица граждан</h1>
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                </tr>
            </thead>
            <tbody>
                {citizens.map((i,j)=>(
                    <tr key={j}>
                        <td>{i.name}</td>
                        <td>{i.birthDate}</td>
                    </tr>
                ))}
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.birthDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;
