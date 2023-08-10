import { useContext, useEffect, useState } from 'react';
import React from 'react';

import './View.css';
import { postContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/FirebaseContext';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postdetail } = useContext(postContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (postdetail && postdetail.userid) {
      const { userid } = postdetail;
      firebase
        .firestore()
        .collection('user')
        .where('id', '==', userid)
        .get()
        .then((response) => {
          response.forEach((doc) => {
            setUserDetails(doc.data());
          });
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [firebase, postdetail]);

  if (!postdetail) {
    // Handle the case when postdetail is not available yet
    return <div>Loading...</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={ postdetail.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetail.price} </p>
          <span>{postdetail.name}</span>
          <p>{postdetail.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;


