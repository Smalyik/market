import React from 'react';
import s from './HelloWorld.module.sass';

const HelloWorld: React.FC = () => {
	return (
		<div>
			<span className={s.foo}>HelloWorld</span>
		</div>
	);
};

export default HelloWorld;
