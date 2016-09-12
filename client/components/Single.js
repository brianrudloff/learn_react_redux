import React from 'react';
import Photo from './Photo';
import Comment from './Comments'

// import comments


const Single = React.createClass({
	render () {
		// index of the post
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === postId);
		console.log(i);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];
		
		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comment postComments={postComments} {...this.props} />
			</div>
		)
	}
});

export default Single;