import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to='/custhist' className='nav-link'>CustHist</Link>
                </li>
                <li>
                    <Link to='/ocstool' className='nav-link'>OcsTool</Link>
                </li>
            </ul>
        )
    }
}

export default SideBar;