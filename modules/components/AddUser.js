import React from 'react'
import $ from 'jquery'
import { BASE_URL } from '../constants'

class AddUser extends React.Component {
	handleSubmit(e) {
		e.preventDefault()

		let first_name = this.refs.first.value
		let last_name = this.refs.last.value
		let phone_number = this.refs.phone.value

		$.ajax({
			url:`${BASE_URL}/users`,
			type: 'POST',
			data: { user: {first_name, last_name, phone_number} }
		}).done( user => {
			this.props.addUser(user)
			this.refs.addForm.reset()
		})
	}
	render() {
		return (
			<div className="col m4">
			 <h3 className="center">Add Product</h3>
        <form ref="addForm" onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="first_name" ref="first" required={true} />
          <input placeholder="last_name" ref="last" required={true}  />
          <input placeholder="phone_number" ref="phone" />
          <button className="btn" type="submit">Add</button>
        </form>
			</div>
		)
	}
}

export default AddUser