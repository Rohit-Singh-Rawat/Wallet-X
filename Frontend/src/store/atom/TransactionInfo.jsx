import { atom } from "recoil";

export const transactionAtom = atom({
	key: 'transactionAtom',
	default: {
		display :false,
		firstName: 'John',
		lastName: 'Doe',
		accountId: 'account1',
		transactionInfo: {
			transactionId: 'transaction1',
			type: 'debit',
			accountInfo: {
				accountId: 'account2',
				userInfo: {
					firstName: 'Alice',
					lastName: 'Smith',
					avatar: '#4C8E4C',
				},
			},
			time: '2024-03-12T10:30:00.000Z',
			amount: 500,
		},
	},
});