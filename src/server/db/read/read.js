const p = require('phin').promisified;
const { curry } = require('ramda');

async function read(databaseUrl, entity, id) {
    const { body } = await p({
        url: `${databaseUrl}/${entity}/${id}.json`,
        parse: 'json'
    });

    return body;
}

module.exports = curry(read);
