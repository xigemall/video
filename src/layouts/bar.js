import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import router from 'umi/router';

import homeIcon from '../assets/tabbar/home.svg';
import homeSelectedIcon from '../assets/tabbar/home-selected.svg';
import myIcon from '../assets/tabbar/my.svg';
import mySelectedIcon from '../assets/tabbar/my-selected.svg';


const icon = (url)=>{
        return <div style={{
            width: '22px',
            height: '22px',
            background: `url(${url}) center center /  21px 21px no-repeat` }}
        />
    }

const bar = [
    {
        'title': '首页',
        'key': '/',
        'icon': icon(homeIcon),
        'selectedIcon':icon(homeSelectedIcon),
        // 'badge': '1',
    },
    {
        'title': '我的',
        'key': 'my',
        'icon': icon(myIcon),
        'selectedIcon': icon(mySelectedIcon),
        // 'badge': '6',
    }
];
export default class MyBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '/',
            hidden: false,
        };
    }

    onPress = (key) => {
        this.setState({selectedTab:key});
        router.replace(key);
    }

    render() {
        const barItem = bar.map(item => {
                return <TabBar.Item
                    title={item.title}
                    key={item.key}
                    icon={item.icon}
                    selectedIcon={item.selectedIcon}
                    selected={this.state.selectedTab === item.key}
                    badge={item.badge}
                    onPress={()=>this.onPress(item.key)}
                >

                </TabBar.Item>
            }
        );
        return (
            <div style={{position: 'fixed', width: '100%', bottom: '0px'}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    // tabBarPosition="bottom"
                >
                    {barItem}
                </TabBar>
            </div>
        )
    }
}

