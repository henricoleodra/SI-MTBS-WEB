import React from 'react';
//import {ListGroup, ListGroupItem} from 'reactstrap';

const TidakDitemukan = (props) => {
    return (
        <div>
            <div>
                <p>Data yang dicari kosong atau tidak ditemukan</p>
            </div>
            <div>
                <h3>Data anak yang anda cari tidak ada, silahkan periksa hal-hal berikut:</h3>
            </div>
            <div>
                <ul>
                    <li>
                        Periksa kembali data anak (nama anak, nama ibu, jenis kelamin, dan tanggal lahir)
                    </li>
                    <li>
                        Jika data yang dicari sudah benar, namun tidak ada hasil silahkan lakukan registrasi baru
                        / isi data anak baru
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TidakDitemukan