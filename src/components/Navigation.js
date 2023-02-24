import { Link } from 'react-router-dom';


const Navigation = () => {


    return (
        <ul>
            <li>
                <Link to={{ pathname: "/"}}>
                    <button>
                        Home
                    </button>
                </Link>
            </li>
            <li>
                <Link to={{ pathname: "/about"}}>
                    <button>
                        About
                    </button>
                </Link>
            </li>
            <li>
                <Link to={{ pathname: "/projects"}}>
                    <button>
                        Projects
                    </button>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation