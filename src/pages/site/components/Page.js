import React from 'react';
import { connect } from 'dva';
import {Pagination} from 'antd';

class Page extends React.Component{
    constructor(props){
        super(props)
    }
    onChangePage = (pageNumber) =>{
        console.log(pageNumber,'pageNumber')
    }
    render(){
        return(
            <Pagination 
              size='large'
              showQuickJumper 
              showTotal={total => `共 ${total} 条`}
              defaultCurrent={1} 
              total={500} 
              onChange={this.onChangePage} 
            />
        )
    }
}
export default connect(({site})=>(site))(Page)