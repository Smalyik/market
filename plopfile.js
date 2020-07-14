/* eslint-disable func-names */
module.exports = function(plop) {
	plop.setGenerator('Component', {
		description: 'create components in /components',
		prompts: [
			{
				type: 'prompt',
				name: 'componentName',
				message: 'Name of your component:',
			},
		],
		actions: answers => {
			const actions = [
				{
					type: 'add',
					path: 'components/{{properCase componentName}}/index.ts',
					templateFile: './plop/component/index.ts.plop',
				},
				{
					type: 'add',
					path: 'components/{{properCase componentName}}/{{properCase componentName}}.module.sass',
					templateFile: './plop/component/component.module.sass.plop',
				},
			];

			actions.push({
				type: 'add',
				path: 'components/{{properCase componentName}}/{{properCase componentName}}.tsx',
				templateFile: './plop/component/component.tsx.plop',
			});

			return actions;
		},
	});

	plop.setGenerator('Page', {
		description: 'create page in /pages',
		prompts: [
			{
				type: 'prompt',
				name: 'pageName',
				message: 'Name of your page:',
			},
		],
		actions: answers => {
			const actions = [
				{
					type: 'add',
					path: 'pages/{{properCase pageName}}/index.tsx',
					templateFile: './plop/page/index.tsx.plop',
				},
			];

			return actions;
		},
	});
};
