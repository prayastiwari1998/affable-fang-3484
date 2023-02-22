import React from "react"
import {Link}  from "react-router-dom"

function Nav(){
    return <div>

        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/man">Men</Link>
            </li>
            <li>
                <Link to ="/woman">Woman</Link>
            </li>
        </ul>
    </div>
}

export default Nav ;