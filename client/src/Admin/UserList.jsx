import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {userList} from '../../store/user'

function UserList() {
  const {users} = useSelector((state) => state.user)

  const dispatch = useDispatch()

	useEffect(() => {
    dispatch(userList())
	}, [])
console.log(users)
  return (
    <div>
    {users.map((user, i) => {
      return (
        <div key={i}>{user.email}

        </div>
      )
    })}
    </div>
     
  )
}

export default UserList