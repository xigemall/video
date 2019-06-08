import React, {Component} from 'react';
import {connect} from 'dva';
import {Flex, WhiteSpace, Button} from 'antd-mobile';
import { Player} from 'video-react';
import 'video-react/dist/video-react.css';


@connect(({movie, loading}) => ({
    data: movie.detail,
}))
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        // 详情ID
        this.id = parseInt(props.computedMatch.params.id);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({
            type: 'movie/movieDetail',
            payload: this.id,
        })
    }

    render() {
        const data = this.props.data;
        console.log(data);
        return (
            <div>
                <WhiteSpace size="lg"/>
                <Flex>
                    <Flex.Item>
                        <img src={data.img} width="150" height="200" style={{marginLeft: "6px"}}/>
                    </Flex.Item>
                    <Flex.Item>
                        <h2>{data.name}</h2>
                        <div>
                            <label>地区:</label>
                            <span>{data.region ? data.region.name : ''}/{data.year}</span>
                        </div>
                        <div>
                            <label>类型:</label>
                            <span>{data.type ? data.type.name : ''}</span>
                        </div>
                        <div>
                            <label>更新:</label>
                            <span>{data.updated_at}</span>
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Button>播放</Button>
                </Flex>
                <video width="320" height="240" controls>
                    <source src={data.source} type="video/mp4"/>
                    <source src={data.source} type="video/ogg"/>
                </video>
                {/*<Player*/}
                    {/*playsInline*/}
                    {/*poster={data.icon}*/}
                    {/*src={data.source}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default MovieDetail;