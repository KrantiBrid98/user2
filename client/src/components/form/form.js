import React from 'react'
import List from "../list/list";

class Form extends React.Component {
    state = {
        showUser: false
    }
    
    render(){
        return(
            <div>
                <button data-testid='button' style={{margin: '20px'}} onClick={()=>this.setState({showUser: true})}>Show User</button>
                {this.state.showUser ? <List/> : <div></div>}
            </div>
        )
    }
    
}

export default Form