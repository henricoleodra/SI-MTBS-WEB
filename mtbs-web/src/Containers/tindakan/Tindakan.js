import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'reactstrap';
import { Wrapper } from  './style';

const Tindakan = ( props ) => {
    return (
        <Wrapper>
          <div className="d-flex flex-column mt-2 wrapper-tindakan">
              <div className="">
                  <h3 className="text-center font-weight-bold">Tindakan</h3>
                  <hr className="underline-tindakan"/>
              </div>
              

              <Row className="justify-content-between px-5 py-0 mt-5">
                <Link to="Klasifikasi"><Button className="button-sebelumnya-tindakan">Kembali ke Halaman Klasifikasi</Button></Link>
                <Link to="../.."><Button className="button-selanjutnya-tindakan">Akhiri Pemeriksaan</Button></Link>
              </Row>
          </div>
        </Wrapper>
    );
}

export default Tindakan;