// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Zack',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '0f991be107bf747939627ea00b46ec37', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '41.878',
	defaultLongitude: '-87.6298',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://new.reddit.com',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '4',
			name: 'Canvas',
			icon: 'file-bar-chart-2',
			link: 'https://canvasconnect.its.virginia.edu',
		},
		{
			id: '5',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0',
		},
		{
			id: '6',
			name: 'Apple Msuic',
			icon: 'music',
			link: 'https://beta.music.apple.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'Never Gonna',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Give You Up',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Never Gonna',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Let You Down',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Never Gonna',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Run Around',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'And',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Desert You',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
