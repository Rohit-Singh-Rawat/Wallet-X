import { atom } from "recoil";

export const transactionAtom = atom({
	key: 'transactionAtom',
	default: {
		display :false,
		firstName: 'DummyFirstName',
		lastName: 'DummyLastName',
		accountId: 'DummyAccount',
		transactionInfo: {
			transactionId: 'DummyTransactionId',
			type: 'DummyType',
			accountInfo: {
				accountId: 'DummyAccountId',
				userInfo: {
					firstName: 'DummyFName',
					lastName: 'DummyLName',
					avatar: 'DummyColor',
					userId : 'DummyId'
				},
			},
			time: 'DummyTime',
			amount: 'DummyAmount',
		},
	},
});