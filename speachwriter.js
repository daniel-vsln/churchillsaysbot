function makeChurchillsLineFromQuery(query) {
	const [a, b] = query.split(':')
	return `"Я никогда не ${a}, когда можно было ${b}" У. Черчиль ` 
}

function couldChurchillSayThat(query) {
	const churchillExpression = /[а-я]+:[а-я]+!/gi;
	return churchillExpression.test(query)
}

exports.makeChurchillsLineFromQuery = makeChurchillsLineFromQuery;
exports.couldChurchillSayThat = couldChurchillSayThat;