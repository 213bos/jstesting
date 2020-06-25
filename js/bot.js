$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Botttt',
			botLogoUrl: src="https://raw.githubusercontent.com/213bos/jstesting/master/img/pp.png",
			loop:false
		})
	.fbMessenger('start', { delay: 0 })
	.fbMessenger('typingIndicator', { delay: 1200 })
	.fbMessenger('message', 'bot', 'Hello, I\'m <b>Andrew</b> - digital product designer and researcher', { timestamp: now, delay: 1500 })

	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: src="https://github.com/213bos/jstesting/blob/master/img/hellopika.gif?raw=true",
	title: '',
	subtitle: '',
	buttons: []
	}
	], { delay: 1500 })

	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('message', 'bot', 'I\'m a <b>Design Science Master\'s student</b> at the University of Michigan' , {delay: 1500 })
	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: src="https://github.com/213bos/jstesting/blob/master/img/michigan.gif?raw=true",
	title: '',
	subtitle: '',
	buttons: []
	}
	], { delay: 2000 })
	.fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Scroll down for my recent work and here are some quick links!', {delay: 1500 })
	.fbMessenger('message', '', '', {delay: 0 })
	.fbMessenger('showQuickReplies', [
		'<a href="https://google.com/" target="blank">Resume</a>',
		'<a href="https://medium.com/@aboskovich" target="_blank">Ignored blog</a>',
		'<a href="https://www.linkedin.com/in/andrew-boskovich/" target="_blank">LinkedIn</a>'

	], { timestamp: now, delay: 1500 })
	// .fbMessenger('scrollQuickReplies', 3, { delay: 2000 })
	// .fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
	// .fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
	// .fbMessenger('selectQuickReply', 2, { delay: 1200 })
	// .fbMessenger('typingIndicator', { delay: 2000 })
	// .fbMessenger('message', 'bot', 'Obvious choice, haha', { timestamp: now, delay: 1000 })
	.fbMessenger('message', 'bot', 'Don\'t be shy, scroll down!', { timestamp: now, delay: 4000 })
	.fbMessenger('message', '', '', {delay: 0 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })

	.fbMessenger('run');
});
