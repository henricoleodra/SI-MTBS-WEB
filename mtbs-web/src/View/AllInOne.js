import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import SideBar from './SideBar/sidebar.js'
import TandaBahayaUmum from './TandaBahayaUmum/tbu.js'
import TandaBahayaUmum2 from './TandaBahayaUmum/tbu2.js'
import Batuk from './Batuk/batuk.js'
import Batuk2 from './Batuk/batuk2.js'
import Summary from './Summary/collapse'
import {Container, Col, Row} from 'reactstrap'
function AllInOne(props){

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

    let { url } = useRouteMatch();
    
    let location = props.location.pathname.split("/");
    console.log(url);
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
                        {(() => {
                            switch(props.location.pathname) {
                                
                                case `/AllInOne/tb1` : 
                                    return <TandaBahayaUmum/>;
                                case `/AllInOne/tb2` : 
                                    return <TandaBahayaUmum2/>;
                                case `/AllInOne/btk1` :
                                    return <Batuk/>;
                                case `/AllInOne/btk2` :
                                    return <Batuk2/>;
                                default :
                                    console.log(props.location.pathname);
                                    return "404 not found";
                            }
                        })()}
                        </div>
                        <div className="mt-2 w-25 mr-1">
                            <Summary/>
                        </div>

                        
                
                
            </div>

        );

    
}

export default AllInOne;