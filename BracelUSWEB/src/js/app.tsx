import React, { useState, useEffect } from 'react';

function App() {
    const [table, setActivitePhysique] = useState(false);
    useEffect(() => {
        getActivitePhysique();
    }, []);

function getActivitePhysique() {
    fetch('http://localhost:3001')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setActivitePhysique(data);
        });
    }

    return (
        <div>
            {table ? table : 'There is no data available'}
            <br />
        </div>
    );
}
export default App;