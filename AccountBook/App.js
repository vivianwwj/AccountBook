import React, { Component } from 'react';
import { calc } from './utils/common'
// 所有路由文件都包裹在Router
//所有路由节点都包裹在Scene
import { Router, Scene, Lightbox } from 'react-native-router-flux'

//LightBox知识点：
//LightBox位置：Router内，Scene外
//Router只能有一个子节点，而LightBox可以有多个的子节点
//除了第一个Scene，其他的都会当做Dialog用

import StartUp from './components/StartUp';
import List from './components/List';
import AddDialog from './components/AddDialog';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //  Router中只能有一个Scene,Scene可以嵌套
      //  需要给Scene添加key否则无法进行引用 Scene属性包含：initial表示是否为首页面
      <Router>
        <Lightbox>
          {/* 这是第一个Scene */}
          <Scene key="root">
            <Scene key="startup" component={StartUp} initial={true} hideNavBar={true} />
            <Scene key="list" component={List}  hideNavBar={true} />
          </Scene>
          {/* 下面的都会当做Dialog来用 */}
          <Scene key="adddialog" component={AddDialog} hideNavBar={true} />
        </Lightbox>

      </Router>
    );
  }
}

export default App;


