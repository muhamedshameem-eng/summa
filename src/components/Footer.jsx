import { Link } from "react-router"


const Footer = () => {
    return (
        <div >
            <div className="flex" style={{height:'150px',justifyContent:'center',alignContent:'center',marginTop:'100px'}}>
                <div><Link to="/upload" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', backgroundColor: 'lawngreen', border: "2px solid ", borderRadius: '5px', margin: "30px", padding: '10px' }}>Upload</Link></div>
                <div><Link to="/update" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', backgroundColor: 'lawngreen', border: "2px solid ", borderRadius: '5px', margin: "30px", padding: '10px' }}>Update</Link></div>
                <div><Link to="/edit" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', backgroundColor: 'lawngreen', border: "2px solid ", borderRadius: '5px', margin: "30px", padding: '10px' }}>Edit</Link></div>
            </div>

        </div>
    )
}

export default Footer
