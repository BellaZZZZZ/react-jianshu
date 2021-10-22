import React, { Component } from 'react';
import Society from '../../../statics/society-news.jpeg';
import { 
  TopicWrapper,
  TopicItem,
} from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="item-img" src={Society}/>
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic;