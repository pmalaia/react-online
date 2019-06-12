import React, { Component } from 'react';
import Composer from 'components/Composer';
import Post from 'components/Post';
import StatusBar from 'components/StatusBar';
import Spinner from 'components/Spinner';

import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts:          [{ id: '123', comment: 'Hi there!', created: 1526825076849 }, { id: '456', comment: 'Приветик', created: 1526825076855}],
        isPostsLoading: false,
    };

    render() {
        const { posts } = this.state;
        const { isPostsLoading } = this.state;
        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isPostsLoading } />
                <StatusBar/>
                <Composer/>
                {postsJSX}
            </section>
        );
    }
}
