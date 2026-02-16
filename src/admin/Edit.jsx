import './admin.css'

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router';
import { toast, ToastContainer } from "react-toastify";



const Edit = () => {
    const{id}=useParams();
    const [productData, setProductData] = useState({
        name:"",
        img:"",
        price:"",
        desc:"",
        quantity:"",
    });


    useEffect(() => {
        fetch(`http://localhost:5018/items/${id}`)
            .then((res) => res.json())
            .then((data) =>
                setProductData(data));
    });
    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const desc = form.desc.value;
       
        
    const productObj= {name,img,desc,price};
        fetch(`http://localhost:5018/allproducts/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(productObj),
        })
            .then((res) => res.json())
            .then((Data) => {
                toast.success("product updated successfully");
               window.location.href='/update'
            });
    
    }



    return (
        <div>
             <div className="forms">
            <ToastContainer/>
            <form onSubmit={handleUpdate}>
                <h2>Edit Product</h2>

                <label value="name">Product Name</label>
                <input type="text" defaultValue={productData.name} id="name" name="name" />

                <label value="img">Image</label>
                <input type="text" defaultValue={productData.img} id="img" name="img" />

                <label value="price">Price</label>
                <input type="number" defaultValue={productData.price} id="price" name="price" />

                <label value="desc">Description</label>
                <textarea id="desc" name="desc" defaultValue={productData.desc} rows="3"></textarea>
                <input type="hidden" name="quantity" value="1" />

                <button type="submit">Submit</button>
            </form>

        </div>


        </div>
    )
}
export default Edit