import React from 'react'
import {BASE_URL} from '../constants'
import $ from 'jquery'
import { Link } from 'react-router'

class ShowUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { first_name: '', last_name: '', phone_number: ''},
			edit: false
		}
	}

	componentWillMount() {
    let id = this.props.params.id
    $.ajax({
      url: `${BASE_URL}/users/${id}`,
      type: 'GET'
    }).done( user => {
      this.setState({ user })
    })
  }

	handleSubmit(e) {
	  e.preventDefault()
	  let first_name = this.refs.first.value
	  let last_name = this.refs.last.value
	  let phone_number = this.refs.phone.value
	  $.ajax({
	    url: `${BASE_URL}/users/${this.state.user.id}`,
	    type: 'PUT',
	    data: { user: { first_name, last_name, phone_number } }
	  }).done( user => {
	    this.setState({ user, edit: false })
	  })
	}

  toggleEdit() {
  	this.setState({ edit: !this.state.edit })
	}

  show() {
	  let user = this.state.user
	  return(
	    <div className="container row">
	      <Link to="/">Back</Link>
	      <h2 className="center">{user.id}</h2>
	      <h3 className="col m3 offset-m3">First Name:</h3>
	      <h3 className="col m6">{user.first_name}</h3>
	      <h3 className="col m3 offset-m3">Last Name:</h3>
	      <h3 className="col m6">{user.last_name}</h3>
	      <h3 className="col m3 offset-m3">Phone_Number:</h3>
	      <h3 className="col m6">{user.phone_number}</h3>
	      <div classname="center">
	        <button className="btn" onClick={this.toggleEdit.bind(this)}>Edit</button>
	      </div>
	    </div>
	  )
	}

	edit() {
	  let user = this.state.user
	  return(
	    <form className="container" ref="editUser" onSubmit={this.handleSubmit.bind(this)}>
	      <input ref="first" placeholder="first_name" required={true} defaultValue={user.first_name} />
	      <input ref="last" placeholder="last_name" required={true} defaultValue={user.last_name} />
	      <input ref="phone" placeholder="phone_number" defaultValue={user.phone_number} />
	      <button type="button" className="btn red" onClick={this.toggleEdit.bind(this)}>Cancel</button>
	      <button type="submit" className="btn">Save</button>
	    </form>
	  )
	}

	render() {
    if (this.state.edit)
      return this.edit()
    else
      return this.show()
  }
}

export default ShowUser