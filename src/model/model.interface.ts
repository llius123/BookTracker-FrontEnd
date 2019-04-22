interface book {
	id: number;
	title: string;
}
interface user_book_read {
	id: number;
	id_user: user;
	id_book: book;
}
interface ResponseEntity {
	code: number;
	mgs: string;
}
interface user {
	id: number;
	email: string;
	username: string;
	password: string;
	token: string;
}
