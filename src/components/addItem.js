import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css'
import { Link, browserHistory } from 'react-router'
import Data from './data'
class Edit extends Component {
 
    addItem(e) {
        e.preventDefault();
        const resName = this.refs.name.value;
        const pic = this.refs.pic.value;
        const detail = this.refs.detail.value;
        const price = this.refs.price.value;
        const type = this.refs.type.value;
        console.log(resName, pic);
        let data = Data;
        data.push({ name: resName, photoUrl: pic, details: detail, price: price, type: type })
        browserHistory.push('/');
    }
    render() {
        return (
            <div className="App  form-group add col-md-6" >
                <h4>Add Item</h4>
                <form onSubmit={(e) => this.addItem(e)}>
                    <label htmlFor="Name"><strong>Name:</strong> </label>
                    <br />
                    <input type="text" className="form-control" ref="name" required />
                    <br />
                    <label htmlFor="photoUrl" ><strong>photoUrl:</strong></label>
                    <br />
                    <input type="text" ref="pic" className="form-control" required />
                    <br />
                    <label htmlFor="price"> <strong> Price:</strong></label>
                    <input type="number" step="any" ref="price" className="form-control" required />
                    <br />
                    <label htmlFor="photoUrl" ><strong>Details:</strong> </label>
                    <br />
                    <input type="text" ref="detail" className="form-control" required />
                    <br />
                    <label htmlFor="type"><strong>Type of Food: </strong></label>
                    <input type="text" ref="type" className="form-control" />
                    <br />
                    <div className="btn-group" role="group">
                        <input type="submit" className="btn btn-primary" />
                        <Link to="/" type="button" className="btn btn-primary">Go Back</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Edit;
