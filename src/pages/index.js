import React, {Component} from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';
import Home from './home';

const tabs = [
    {title: '首页', key: 'home'},
    {title: '电影', key: 'movie'},
    {title: '电视剧', key: 'teleplay'},
];
export default class Index extends Component {
    render() {
        return (
            <div>
                <WhiteSpace/>
                <Tabs tabs={tabs} initialPage="home">
                    <Home key="home"/>
                    <h1 key="movie">22</h1>
                    <h1 key="teleplay">34</h1>
                </Tabs>
                <WhiteSpace/>
            </div>
        )
    }
}