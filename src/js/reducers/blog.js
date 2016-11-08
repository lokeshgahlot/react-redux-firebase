export default function reducer(
	state = {
		fetching: false,
		fetch: false,
		blogs: [],
		error: null
	},
	action
) {

	switch (action.type) {
		case 'FETCH-BLOGS-START':
			return {
				...state,
				fetching: true
			}
		break;
		case 'FETCH-BLOGS-FULFILLED':
			return {
				...state,
				fetching: false,
				fetch: true,
				blogs: action.payload
			}
		break;
		case 'ADD-BLOG':
			return {
				...state,
				// add code here
			}
		break;

		case 'REMOVE-BLOG':
			return {
				...state,
				// add code here
			}
		break;
	}
	return state;
}
