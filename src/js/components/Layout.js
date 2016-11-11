import React from 'react';


import AddPost from './AddPost';
import Blogs from './Blogs';

export default class Layout extends React.Component {
	render() {
		return (
			<div class='container'>
				<h1>Create a Post</h1>
				<AddPost />
				<Blogs />
			</div>
		);
	}
}
