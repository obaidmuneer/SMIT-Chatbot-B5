import { Link } from "react-router-dom"
import "./index.css"
export default function Root() {
    return (
        <>
            <h1 className="heading" style={{ border: "2px solid yellow" }}>React Router</h1>
            {/* <a href="/contact">Contact</a><br /> */}
            <Link to={"/contact"} >Contact</Link>
            <Link to={"/profile/123"} >Profile</Link>
        </>
    );
}
