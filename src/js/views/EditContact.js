import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressPlugin } from "webpack";

export const EditContact = () => {
    const { store, actions } = useContext(GlobalState);
    let contact = store.contact.find(con => con.id == props.match.params.id);
    const [editedContact, setEditedContact] = useState{{
        full_name: contact.full_name,
        address: contact.address,
        phone: contact.phone,
        email: contact.email,
        id: contact.id
    }};
    const handleInput = e => {
        setEditedContact({...editedContact, [e.target.name]: e.target.value});
    }



	return (
		<div className="container">
			<div>
    <h1 className="text-center mt-5">Edit Contact {contact.id}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" />
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
