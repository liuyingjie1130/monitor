import Table from './components/Table'
import { Component} from 'react';
import {connect} from 'dva';
import CollapsePanel from './components/highSearch/index'

class Tags extends Component {
  constructor(props) {
      super(props)
      this.state={
          
      }
    }
  

render(){
  return (
      <div>
        <CollapsePanel tags={true}/>
        <Table/>
      </div>
  );
}
}
export default connect(({tags})=>(tags))(Tags)
