import React from 'react'
import { useFetch } from '../../hooks/useFetch';

// styles
import './User.css';
import SkeletonProfile from '../../skeleton/SkeletonProfile';

const UserProfile = () => {
  const url = 'https://jsonplaceholder.typicode.com/users/1';
  const { data } = useFetch(url);
  
  return (
    <div className='user__container flex'>
      {data && (
        <>
          <div className='user_icon'></div>
          <div>
            <h4>welcome! { data.name } </h4>
            <p>{ data.username }</p>
            <p>{ data.email }</p>
            <p>{ data.phone }</p>
            <p>{ data.website }</p>
            <p>{ data.address.street }</p>
            <p>{ data.company.name }</p>
          </div>
        </>
      )}
      {!data && <SkeletonProfile />}
    </div>
  )
}

export default UserProfile