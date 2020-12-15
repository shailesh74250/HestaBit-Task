import React, { useContext } from 'react';
import ListContext from '../../context';
import Title from '../../components/Title';
import Button from '../../components/Button';
import PostCard from '../../components/PostCard';
import UserCard from '../../components/UserCard';
import './displayList.css';
import { LOAD } from '../../constants/labels';
import { POST_API, USER_API } from '../../constants/apiUrl';
import callAPI from '../../services/callApi';
import { POSTS, USERS } from '../../constants/labels';

function DisplayList() {
	const { state, dispatch } = useContext(ListContext);

	const posts = state.postData.data.map((item, index) => (
		<div className="post-list" key={index}>
			<PostCard cardTitle={item.title} cardBody={item.body} />
		</div>
	));

	const users = state.userData.data.map((item, index) => (
		<div className="user-list" key={index}>
			<UserCard name={item.name} email={item.email} gender={item.gender} />
		</div>
	));

	const loadMorePost = () => {
		const { page, pages } = state.postData.meta.pagination;
		if (page < pages) {
			callAPI(`${POST_API}?page=${page + 1}`, 'GET').then((res) => {
				dispatch({
					type: 'GET_POSTS',
					payload: res,
				});
			});
		} else {
			alert('No more post to fetch!');
		}
	};

	const loadMoreUser = () => {
		const { page, pages } = state.userData.meta.pagination;
		if (page < pages) {
			callAPI(`${USER_API}?page=${page + 1}`, 'GET').then((res) => {
				dispatch({
					type: 'GET_USERS',
					payload: res,
				});
			});
		} else {
			alert('No more user to fetch!');
		}
	};

	return (
		<>
			<Title label={POSTS} />
			<div className="list-container">{posts}</div>
			{<Button label={LOAD} onClickHandler={loadMorePost} />}
			<Title label={USERS} />
			<div className="list-container">{users}</div>
			{<Button label={LOAD} onClickHandler={loadMoreUser} />}
		</>
	);
}

export default DisplayList;
