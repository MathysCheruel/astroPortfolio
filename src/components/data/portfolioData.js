/**
 * @typedef PortafolioData
 * @property {string} imgSrc 
 * @property {string} title 
 * @property {string[]} skills 
 * @property {string} descripcion 
 * @property {string} demoURL 
 * @property {string} repoURL 
 * @property {string} anim 
 * @property {number} averageBrightness
 */

/**
 * @type {PortafolioData[]}
*/
export const portafolioData = [
	{
		imgSrc: 'https://i2.wp.com/blog.testingdigital.com/wp-content/uploads/2017/07/plans-de-tests.jpg?fit=500%2C357&ssl=1',
		title: 'Virtual Testing Tool',
		skills: ['CSHARP', 'XAML', 'GITLAB'],
		descripcion:
			"J'ai eu l'occasion de participer à la création d'un outil de tests automatisés nommé VTT, ce qui m'a permis de développer mes compétences en C# et XAML. Au delà de l'apprentissage de languages de programmation, cela m'a permis de développer mes compétences en communication",
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://media.sproutsocial.com/uploads/2024/04/How-to-optimize-your-social-media-workflow-Final.svg',
		title: 'Workflow Sécurisé',
		skills: ['PHP', 'CSS', 'GITLAB', 'SQL', 'JAVASCRIPT'],
		descripcion:
			"J'ai été affecté pour ma seconde année au sein de l'entreprise MTB111 à un projet de création d'une application web intranet permettant à l'entreprise de réaliser, traiter et confirmer des demandes de congés, des notes de frais ainsi que des saisies de charges mensuelles",
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://i.ibb.co/PrXqk0T/image1.png',
		title: 'MTGames',
		skills: ['JAVA', 'SQL'],
		descripcion:
			"MTGames est une application JAVA permettant de jouer à des jeux. L'objectif principal était de créer une application permettant aux membres de l'entreprise de se détendre au tour d'un jeu simple comme les dames.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://i.ibb.co/crJDkQv/DALL-E-2024-12-11-00-20-15-Create-a-modern-and-eye-catching-logo-for-an-application-named-RFTG-The-a.webp',
		title: 'RFTG',
		skills: ['JAVA', 'PHP', 'CSS', 'SQL'],
		descripcion:
			"RFTG est un projet de location de DVD/Films au sein d'un camping. Pour cela nous avons développé une API Rest en Java permettant de communiquer avec notre base de donnée. Nous avons développé une application web en Php Laravel permettant à l'administrateur de gérer tout un tas d'informations comme ses stocks. Nous avons aussi développé une application mobile Android permettant aux utilisateurs de réserver un film",
		demoURL: 'https://github.com/MathysCheruel/RFTG',
		repoURL: 'https://github.com/MathysCheruel/Projet_RFTG',
		anim: 'fade-left',
	}
];

const skillIcons = {
	JAVASCRIPT: 'skill-icons:javascript',
	CSS: 'skill-icons:css',
	CSHARP: 'skill-icons:csharp',
	XAML: 'skill-icons:xaml',
	JAVA: 'skill-icons:java',
	PHP: 'skill-icons:php',
	SQL: 'skill-icons:sql',
	GITLAB: 'skill-icons:gitlab',
};

export const getPortafolioData = portafolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
