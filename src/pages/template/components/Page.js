import React from 'react';
import { connect } from 'dva';
import {Pagination} from 'antd';

class Page extends React.Component{
    constructor(props){
        super(props)
    }
    onChangePage = (pageNumber) =>{
        console.log(pageNumber,'pageNumber')
        this.props.dispatch({
            type:'template/updateStates',
            payload:{
                pageNumber
            }
        })
    }
    render(){
        const {total,pageNumber} = this.props
        console.log(total,555555555555,pageNumber)
        return(
            <Pagination 
              size='large'
              showQuickJumper 
              showTotal={total => `共 ${total} 条`}
              defaultCurrent={1} 
              total={total} 
              onChange={this.onChangePage} 
              pageSize={18}
              current={pageNumber}
            />
        )
    }
}
export default connect(({template})=>(template))(Page)