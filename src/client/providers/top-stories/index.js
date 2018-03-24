import { Component } from 'react';
import PropTypes from 'prop-types';

import getHostname from 'Helpers/get-hostname';
import hoursSincePublished from 'Helpers/hours-since-published';

class TopStories extends Component {
    static async fetchStories() {
        const response = await fetch('http://localhost:3000/api/stories');
        return response.json();
    }

    static getItems(itemList) {
        return itemList.map(item => ({
            heading: item.title,
            hostname: item.url ? getHostname(item.url) : undefined,
            url: item.url,
            points: item.score,
            author: item.by,
            hours: hoursSincePublished(item.time),
            comments: item.descendants || 0
        }));
    }

    state = {
        items: []
    }

    async componentDidMount() {
        const itemList = await TopStories.fetchStories();
        const items = TopStories.getItems(itemList);
        this.setItems(items);
    }

    setItems(items) {
        this.setState({ items });
    }

    render() {
        return this.props.render(this.state);
    }
}

TopStories.propTypes = {
    render: PropTypes.func.isRequired
};

export default TopStories;
