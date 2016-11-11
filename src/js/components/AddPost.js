import React from 'react';
import {connect} from 'react-redux';
import {addBlog} from '../actions/blogs';

@connect((store) => {
  return {
      blogs: store.blog.blogs
  };
})

export default class AddPost extends React.Component {
	render() {
		return (
			<form class="form-inline">
			  <div class="form-group">
			    <label class="sr-only" for="post-blog">Email address</label>
			    <input type="text" class="form-control" id="post-blog" placeholder="Type here..." />
			  </div>
			  <button type="submit" class="btn btn-primary" onClick={this.postBlog.bind(this)}>Create Post</button>
			</form>
		);
	}

	postBlog(e) {
		e.preventDefault();
		let inputFiled = document.getElementById('post-blog');
		let val = inputFiled.value;
		if (val && val !== '') {
			this.props.dispatch(addBlog(val));
			inputFiled.value = '';
		}
	}
}
