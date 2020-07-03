import React, { useState, useEffect, Component  }  from 'react';


export default class AnaliseAgendamento extends Component {
    // const [socialName, setSocialName] = useState([1,3,4,5,6]);
    // const [password, setpassword] = useState('');
    // const a = [1,356,7,9].map((number) => 
    //     <li key={number.toString()}>
    //         {number}
    //     </li>
    // );
    
    render() {
        let temp = (
            <div>
                I came form a temp variable
            </div>
        );

        let bolean = false;
        return (
            <div>
            {
                !bolean ? 
                    <div> {bolean} é verdadeiro </div>
                    : null
            }
            // <div>
                    <div style={{  flex: "1" }} className="aria-current container-fluid card card-body background-color-red">ess</div>
            {temp}
    
            <ul >{bolean}</ul>
            // </div>
            </div>
        );    
    }
        
}