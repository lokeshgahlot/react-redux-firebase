import React from 'react';
import {connect} from 'react-redux';
import {fetchBlogs, removeBlog} from '../actions/blogs'

@connect((store) => {
	console.log(store);
  return {
      blogs: store.blog.blogs
  };
})

export default class Blogs extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchBlogs());
	}

	deletBlog(e) {
		var key  = e.target.getAttribute('data-key');
		if(key) {
			this.props.dispatch(removeBlog(key));
		}
	}

	render() {
		let blogs = [];
		for (let blog in this.props.blogs) {
			blogs.push(<li key = {blog} class="list-group-item clearfix">{this.props.blogs[blog]}
				<button data-key = {blog} class='btn btn-danger pull-right'>Delete</button>
			</li>)
		}
		return (
			<ul class="list-group" onClick={this.deletBlog.bind(this)}> {blogs} </ul>
		);
	}
}
