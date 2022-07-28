import React from 'react';
import s from './Project.module.scss';

export const Project = ({title, description, style}) => {
		return (
				<div className={s.project}>
						<div className={s.img} style={style}>
								<a className={s.buttonWatch}>watch</a>
						</div>
						<div className={s.projectInfo}>
								<h3 className={s.projectTitle}>{title}</h3>
								<p className={s.description}>{description}</p>
						</div>
				</div>
		);
};

