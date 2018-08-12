import React, {Component} from 'react'
import {Button} from 'antd'
import * as GetServices from '../services/get'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
        this.getMsg = this.getMsg.bind(this);
    }
    getMsg = async(payload) => {
        var ret = await Promise.all([
            GetServices.getMsg(payload)
        ]);

        console.log(ret[0]);

        this.setState ({data : ret[0].data });

    }
    render(){
        return (
         <React.Fragment>
             <Button type="primary"onClick={this.getMsg}>GetMessage
             
             </Button>
             <p>
                 {this.state.data.toString()}
                 </p>                          

         </React.Fragment>
        );
    }
}
export default Home;