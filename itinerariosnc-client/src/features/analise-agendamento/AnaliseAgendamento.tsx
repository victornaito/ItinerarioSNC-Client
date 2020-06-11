import React, { useState, useEffect  }  from 'react';


export default function AnaliseAgendamento() {
    const [socialName, setSocialName] = useState([1,3,4,5,6]);
    const [password, setpassword] = useState('');
    const r = 1232;
    const a = [1,356,7,9].map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );
    

        return (

            < >
                <div className="container-fluid card card-body background-color-red">ess</div>

                <ul >{a}</ul>
            </>
        );    
}