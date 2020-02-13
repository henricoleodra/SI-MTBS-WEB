import React from 'react'
import SideBar from './View/SideBar/Sidebar.js'
import TandaBahayaUmum from './View/TandaBahayaUmum/tbu.js'

export default class allInOne extends React.Component{
    render(){
        return<div>
            { joinChildren(this.props.items, this.renderItem, this.renderSeparator) }
            </div>
        
        
    }
    renderItem = (item, index) => {
        return <Item key={ index } className="item" />
      }
      
    renderSeparator = key => {
    return <Separator className="separator" key={ key } />
    }
    
}