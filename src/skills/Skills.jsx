import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
		return (
				<div className={s.skillsBlock}>
						<div className={`${sContainer.container} ${s.skillsContainer}`}>
								<Title title={'Skills'}/>
								<div className={s.skills}>
										<Skill title={'JS'}
										       description={'descr'}/>
										<Skill title={'CSS'}
										       description={'descr'}/>
										<Skill title={'React'}
										       description={'descr'}/>
								</div>
						</div>
				</div>
		);
};
