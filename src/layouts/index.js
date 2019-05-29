import React, {Component} from 'react';
import MyBar from './bar';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './index.css';

class BasicLayout extends Component {
    render() {
        // 允许有菜单
        const array = ['/', '/my'];
        const showBar = array.includes(this.props.location.pathname);
        return (
            <div className={styles.normal}>
                {this.props.children}
                {showBar ? <MyBar/> : null}
            </div>
        )
    }
}

export default BasicLayout;
