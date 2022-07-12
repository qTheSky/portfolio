import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'


export const Contacts = () => {
		return (
				<div className={s.contactsBlock}>
						<div className={`${sContainer.container} ${s.container}`}>
								<h2>Contacts</h2>
								<form action="/" className={s.form}>
										<input className={s.input}/>
										<input className={s.input}/>
										<textarea className={s.textarea}></textarea>
										<button className={s.sendBtn}>Send</button>
								</form>
						</div>
				</div>
		);
};
