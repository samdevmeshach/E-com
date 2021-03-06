import React,{useState,useEffect} from 'react'
import {isAuthenticated} from '../../../api/auth'
import {createProduct,getCategories} from '../../../api/apiAdmin'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {Link} from "react-router-dom";
import SideBar from '../../../component/admin/sidebar'
import Header from '../../../component/header';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const AddProduct = () => {

    const {user,token} = isAuthenticated() 


const [values,setValues] = useState({
    name:'',
    description:'',
    price:'',
    categories:[],
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    error:'',
    createdProduct:'',
    success:false,
    redirectToProfile:false,
    formData:''
})


const {name,description,price,categories,category,success,quantity,loading,error,createdProduct,formData} = values


const init = () => {
    getCategories().then(data => {
        if(data.error){
            setValues({...values,error:data.error})
        }else {
            setValues({...values,categories:data,formData:new FormData()})
        }
    })
}

    useEffect(() => {
        init();
    },[])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})
    }

    const classes = useStyles();


    const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    createProduct(user._id,token,formData)
    .then(data => {
        if(data.error){
            setValues({...values,error:data.error,loading:false})
            console.log(formData)
        } else {
            setValues({
                ...values,
                name:'',
                description:'',
                price:'',
                quantity:'',
                photo:'',
                loading:false,
                createdProduct:data.name,
                success:true,
                formData: new FormData(),
                redirectToProfile:false,
            })
        }
    })
}

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues({...values,error: false});
    };

    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues({...values,success: false});
    };

    const handleCloseLoader = () => {
            setValues({...values,loading: false})
    }

    const showError =() => (
        <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )

    const showSuccess =() => (
        <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success">
                {`${createdProduct} is created!`}
            </Alert>
        </Snackbar>
    )

    const showLoading = () => (
        loading && (<Backdrop open={loading} className={classes.backdrop} onClick={handleCloseLoader}>
            <CircularProgress color="inherit" />
        </Backdrop>)
    )

    const newProduct =() => (
        <div>
            <form className="mb-3" onSubmit={clickSubmit}>
                <h4>Photo</h4>
                <div className="form-group">
                    <label className="btn btn-primary">
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange("photo")}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange("name")}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        onChange={handleChange("description")}
                        value={description}
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={handleChange("price")}
                        value={price}
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select className="form-control" onChange={handleChange("category")} value={category}>
                        <option> Please select</option>
                        {categories && categories.map((c,i) => (<option key={i} value={c._id}>{c.name}</option>))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Shipping</label>
                    <select className="form-control" onChange={handleChange("shipping")}>
                        <option> Please select</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={handleChange("quantity")}
                        value={quantity}
                    />
                </div>
                <button className="btn btn-primary mt-3"> Create Product</button>{showLoading()}
            </form>
        </div>
    )

    return(
        <>
        <Header />
        <SideBar />
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-8 offset-md-3">
                    {showError()}
                    {showSuccess()}
                    {newProduct()}
                </div>
            </div>
        </div>
        </>
    )
}


export default AddProduct