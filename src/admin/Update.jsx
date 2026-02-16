import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";



const Update = () => {
    const [productItems, setProductItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5018/display')
            .then((res) => res.json())
            .then((data) =>
                setProductItems(data))
    }, [])


    const DeleteItems = (id) => {
        fetch(`http://localhost:5018/product/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                toast.error("delete successfully");
                setProductItems((prevProductItems) => prevProductItems.filter((Item) => Item._id !== id));
            })
    }

    return (
        <div>
            {/* <div>
                <table>
                    <div>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Quantity</th>
                        </tr>
                        {productItems.map((Item) => (
                            <tr key={Item._id}>
                                <td>{Item.name}</td>
                                <td><img src={Item.img} /></td>
                                <td>{Item.price}</td>
                                <td>{Item.desc}</td>
                                <td>{Item.quantity}</td>
                                <td><button placeholder='delete' onClick={() => DeleteItems(Item._id)}>delete</button></td>
                                <td>
                                 <Link to={`/edit/${Item._id}`}><button>Edit</button> </Link>  
                                </td>
                            </tr>
                        )
                        )}

                    


                    </div>
                </table>
            </div> */}





            <div>
                <table>
                    <tbody>

                        <tr>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                        {productItems.map((Item) => (
                            <tr key={Item._id}>
                                <td> <ul className="cart-list" >
                                    <li key={Item._id} className="cart-item">
                                        <img src={Item.img} width="80" height="80" alt={Item.name} />
                                        <div>
                                            <strong>{Item.name}</strong>
                                            <div>{Item.desc} </div>
                                            <div>₹ {Item.price}</div>
                                        </div>
                                    </li>
                                </ul></td>
                                <td>{Item.quantity}</td>
                                <td><button placeholder='delete' onClick={() => DeleteItems(Item._id)}>delete</button></td>
                                <td>
                                    <Link to={`/edit/${Item._id}`}><button>Edit</button> </Link>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default Update