import React, {Component} from 'react';
import { connect } from 'dva';
// import {Grid} from 'antd-mobile';
// import style from './home.css';
// import icon from '../assets/tabbar/home.svg';

// const data = [
//     {
//         'icon': icon,
//         'text': 'dd'
//     }
// ]
@connect(({movie,loading})=>({
    list:movie
}))
class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: data,
    //     }
    // }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({
            type:'movie/movieList',
            payload:{id:66}
        })
        // console.log(this.props.list);
    }

    render() {
        console.log(this.props.list);
        // const {list} = this.props;
        // return (
        //     <div>
        //         <div className={style.title}>最新热门推荐</div>
        //         <Grid data={list} columnNum={3} itemStyle={{height: '150px', background: 'rgba(0,0,0,.05)'}}/>
        //     </div>
        // )
        return(
            <div>sdfds</div>
        )
    }
}

export default Home;