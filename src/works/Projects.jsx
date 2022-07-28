import React from 'react';
import s from './Projects.module.scss'
import sContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '.././assets/image/todo.jpg'
import socialImage from '.././assets/image/social_media.jpg'
import pizzaImage from '.././assets/image/pizza.jpg'

export const Projects = () => {
		const socialStyle = {
				backgroundImage: `url(${socialImage})`,
		}
		const todoStyle = {
				backgroundImage: `url(${todoImage})`,
		}
		const pizzaStyle = {
				backgroundImage: `url(${pizzaImage})`,
		}

		return (<div className={s.projectBlock}>
				<div className={`${sContainer.container} ${s.projectContainer}`}>
						<Title title={'Projects'}/>
						<div className={s.projects}>

								<Project style={socialStyle} title={'social network'} description={'lorem ipsum'}/>
								<Project style={todoStyle} title={'todolist'}
								         description={'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '}/>
								<Project style={pizzaStyle} title={'react-pizza'}
								         description={'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}/>

						</div>
				</div>
		</div>);
};