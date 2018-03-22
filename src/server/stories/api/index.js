const process = require('process');
const listStoriesFactory = require('../../db/list');
const readStoryFactory = require('../../db/read');

const { DATABASE_URL } = process.env;
const listStories = listStoriesFactory(DATABASE_URL);
const readStory = readStoryFactory(DATABASE_URL)('item');

async function getStories(ctx) {
    const topStories = await listStories('topstories');
    const items = await Promise.all(topStories.map(id => readStory(id)));

    ctx.body = items;
}

module.exports = {
    getStories
};
