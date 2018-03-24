import React from 'react';
import 'normalize.css';

import AppHeader from 'Components/app-header';
import NewsItemList from 'Components/news-item-list';
import TopStories from 'Providers/top-stories';

import './app.css';

const App = () => (
    <main className='app'>
        <AppHeader />
        <TopStories render={({ items }) =>
            <NewsItemList items={items} />
        }
        />
    </main>
);

export default App;
