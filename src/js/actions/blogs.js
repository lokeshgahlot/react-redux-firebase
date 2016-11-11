import {firebaseRef} from '../firebase';

export function fetchBlogs() {
	return dispatch => {

		firebaseRef.on('value', (snapshot)=>{
			dispatch({
				type: 'FETCH-BLOGS-FULFILLED',
				payload: snapshot.val() && snapshot.val().blogs
			});
		});
	}
}

export function addBlog(text) {
	return dispatch => {
		firebaseRef.child('blogs').push(text);
	}
}

export function removeBlog(key) {
	return dispatch => {
		firebaseRef.child('blogs').child(key).remove();
	}
}
