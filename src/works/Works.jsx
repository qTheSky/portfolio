import React from 'react';
import s from './Works.module.css'
import sContainer from '../common/styles/Container.module.css';
import {Work} from './work/Work';

export const Works = () => {
		return (
				<div className={s.worksBlock}>
						<div className={`${sContainer.container} ${s.worksContainer}`}>
								<h2 className={s.title}>My works</h2>
								<div className={s.works}>

										<Work/>
										<Work/>

								</div>
						</div>
				</div>
		);
};