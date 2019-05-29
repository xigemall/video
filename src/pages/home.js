import React, {Component} from 'react';
import {connect} from 'dva';
import router from 'umi/router';
import {Grid} from 'antd-mobile';
import style from './home.css';

@connect(({movie, loading}) => ({
    list: movie.data
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
            type: 'movie/movieList',
        })
    }

    listData = (data) => {
        return data.map((item) => {
            item.icon = item.img;
            item.text = item.name;
            return item;
        });
    };

    newMovieOnClick = (item, index) => {
        router.push(`/movie/${item.id}`);
    };

    render() {
        const {list} = this.props;
        const data = list ? this.listData(list) : list;
        return (
            <div>
                <div className={style.title}>最新热门推荐</div>
                <Grid
                    data={data}
                    columnNum={3}
                    // itemStyle={{height: '100px', background: 'rgba(0,0,0,.05)'}}
                    renderItem={dataItem => (
                        <div>
                            <img src={dataItem.icon} style={{width: '90%', height: '90px'}} alt=""/>
                            <div style={{color: '#888', fontSize: '14px'}}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                    onClick={this.newMovieOnClick}
                />
            </div>
        )
    }
}

export default Home;