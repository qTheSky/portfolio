import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css';

export const Footer = () => {
		return (
				<div className={s.footerBlock}>
						<div className={`${sContainer.container} ${s.footerContainer}`}>
								<h2>Mikhail Smirnov</h2>
								<div className={s.images}>
										<div className={s.image}></div>
										<div className={s.image}></div>
										<div className={s.image}></div>
										<div className={s.image}></div>
								</div>
								<div className={s.copyright}>2022 все права защищены</div>
						</div>
				</div>
		);
};
