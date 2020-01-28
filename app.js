const lib = require('./churchill');
const speachwriter = require('./speachwriter');


const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TOKEN);

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.on('inlineQuery', async msg => {

    let query = msg.query;
    console.log(`inline query: ${ query }`);

    // Create a new answer list object
    const answers = bot.answerList(msg.id, {cacheTime: 5});

    // Article
    answers.addArticle({
        id: 'query',
        title: 'Your query must me like A:B! ',
        description: `Your query: ${ query }`,
        message_text: 'Click!'
    });

	if (speachwriter.couldChurchillSayThat(query)) {
  		console.log('Pattern is OK! Let\'s make some Churchill!/')

  		const churchillsLine = speachwriter.makeChurchillsLineFromQuery(query);
  	
  		const {url, public_id, ...props} = await lib.uploadChurchillToClouds(churchillsLine)

  		console.log(props)

		answers.addPhoto({
	      id: public_id,
	      title: churchillsLine,
	      photo_url: url,
	      thumb_url: url
	    })
 	} 


    // Send answers
    return bot.answerQuery(answers);
});

bot.start();