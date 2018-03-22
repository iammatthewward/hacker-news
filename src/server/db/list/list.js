const p = require('phin').promisified;
const { curry } = require('ramda');

async function list(databaseUrl, entity) {
    const { body } = await p({
        url: `${databaseUrl}/${entity}.json`,
        parse: 'json'
    });

    return body.slice(0, 30);
}

module.exports = curry(list);
