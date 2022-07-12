import React from 'react';
import s from './Work.module.css';

export const Work = () => {
		return (
				<div className={s.work}>
						<img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png'}  className={s.img}/>
						<button className={s.buttonWatch}>watch</button>
						<h3>project name</h3>
						<p>description</p>
				</div>
		);
};

