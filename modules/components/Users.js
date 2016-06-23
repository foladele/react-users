import React from 'react'
import User from './User'

const Users = ({ users, deleteUser }) => {
	let items = users.map( user => {
		return(<User key={user.id} {...user} deleteUser={deleteUser} />)
	})

	return(
		<div className="col m8">
			<h3 classsName="center">Users</h3>
			<ul style={{ maxHeight: '100vh', overflow: 'scroll' }}>
				{items}
			</ul>
		</div>
	)
}

export default Users