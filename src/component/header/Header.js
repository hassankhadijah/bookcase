import { Link } from "react-router-dom"; 
export default function Header() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact"></Link>&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;
            <Link to="/bookcase"></Link>


        </div>
    )
}