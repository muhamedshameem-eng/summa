import './admin.css'
import 'react-toastify/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';


const Upload = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const quantity = 1;

        if (name === "" || img === "" || price === "" || desc === "" || quantity === "") {
            toast.warn("fill the required fields")
        }

        const prodObj = { name, img, price, desc, quantity };
        console.log(prodObj);

        fetch('http://localhost:5018/view', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prodObj)
        }).then((res) => res.json())
            .then((data) => {
                toast.success("data added successfully");
                form.reset();
                window.location.href = '/update';
            })

    }




    return (
        <div className="forms">
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>

                <label value="name">Product Name</label>
                <input type="text" id="name" name="name" />

                <label value="img">Image</label>
                <input type="text" id="img" name="img" />

                <label value="price">Price</label>
                <input type="number" id="price" name="price" />

                <label value="desc">Description</label>
                <textarea id="desc" name="desc" rows="3"></textarea>
                <input type="hidden" name="quantity" value="1" />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Upload