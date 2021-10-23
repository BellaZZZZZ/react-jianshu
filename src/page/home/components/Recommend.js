import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem} from '../style';


class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl="http://www.likeyunba.com/2.php?url=https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png">
          1
        </RecommendItem>
        <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png">
          2
        </RecommendItem>
      </RecommendWrapper>
    )
  }
};

export default Recommend;