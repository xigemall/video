import React, {Component} from 'react';
import MyBar from './bar';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './index.css';

class BasicLayout extends Component {
    render() {
        return (
            <div className={styles.normal}>
                {this.props.children}
                <MyBar />
            </div>
        )
    }
}

export default BasicLayout;
