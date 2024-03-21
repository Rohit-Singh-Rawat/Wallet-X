import { atom } from 'recoil';

const SideBarOpen =
	atom(
	{
		key: 'SideBarOpen',
		default: false,
	});

export { SideBarOpen };
