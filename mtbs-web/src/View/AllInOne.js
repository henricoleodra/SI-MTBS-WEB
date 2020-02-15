import React from 'react'
import SideBar from './SideBar/sidebar.js'
import TandaBahayaUmum from './TandaBahayaUmum/tbu.js'
import Summary from './Summary/collapse'
import {Container, Col, Row} from 'reactstrap'
function AllInOne(){

    //     return<div>
    //         { joinChildren(this.props.items, this.renderItem, this.renderSeparator) }
    //         </div>
        
        
    // }
    // renderItem = (item, index) => {
    //     return <Item key={ index } className="item" />
    //   }
      
    // renderSeparator = key => {
    // return <Separator className="separator" key={ key } />
    // }'
        return(
            <div style={{ width: '100%'}} className="d-flex">
                {/* <Row>
                    <Col xs="3">
                        <SideBar/>
                    </Col>
                    <Col xs="6">
                        <TandaBahayaUmum/>
                    </Col>
                    <Col xs="3">
                        <Summary/>
                    </Col>
                </Row> */}
                        <SideBar/>
                        <div className="w-75">
                            <TandaBahayaUmum/>
                        </div>
                        <div className="mt-2 w-25">
                            <Summary/>
                        </div>

                        
                
                
            </div>

        );

    
}

export default AllInOne;