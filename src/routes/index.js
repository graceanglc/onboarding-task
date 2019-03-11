import {
	STORE_LIST_PATH_URL,
} from './constants';

import StoreListPage from 'src/containers/StoreListPage';
import StoreDetailPage from 'src/containers/StoreDetailPage';

export default [
	{
		path: STORE_LIST_PATH_URL,
		component: StoreListPage,
	},
	{
		path: `${STORE_LIST_PATH_URL}/:id`,
		component: StoreDetailPage,
	},
];
