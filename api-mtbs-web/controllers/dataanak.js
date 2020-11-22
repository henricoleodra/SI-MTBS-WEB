const dataanak = async function(req, res, next) {
    const dataAnak = Array( 
        {
            id: 0,
            nama: 'John Doe',
            ibu: 'Jane Doe',
            tanggallahir : '30 Januari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 1,
            nama: 'Yovan',
            ibu: 'Navoy',
            tanggallahir : '21 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 2,
            nama: 'Naomi',
            ibu: 'Shinna',
            tanggallahir : '5 Mei 2018',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 3,
            nama: 'Ignatius',
            ibu: 'Chritiana',
            tanggallahir : '25 Mei 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 4,
            nama: 'Archgod',
            ibu: 'Gafties',
            tanggallahir : '12 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 5,
            nama: 'Friska',
            ibu: 'Michael',
            tanggallahir : '21 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 6,
            nama: 'Rachel',
            ibu: 'Florencia',
            tanggallahir : '29 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 7,
            nama: 'Lydia',
            ibu: 'Mutiara',
            tanggallahir : '30 September 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 8,
            nama: 'Harry',
            ibu: 'Senjaya',
            tanggallahir : '22 Agustus 2020',
        },
        {
            id: 9,
            nama: 'Kenny',
            ibu: 'Sonya',
            tanggallahir : '1 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 10,
            nama: 'Tifani',
            ibu: 'Novi',
            tanggallahir : '11 Maret 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 11,
            nama: 'Kiki',
            ibu: 'Tanza',
            tanggallahir : '15 April 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 12,
            nama: 'Susan',
            ibu: 'Onya',
            tanggallahir : '25 Mei 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 13,
            nama: 'Henry',
            ibu: 'Rico',
            tanggallahir : '30 Agustus 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 14,
            nama: 'Leo',
            ibu: 'Tobias',
            tanggallahir : '1 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 15,
            nama: 'Ujang',
            ibu: 'Mole',
            tanggallahir : '22 Agustus 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 16,
            nama: 'Kungfu',
            ibu: 'Wombat',
            tanggallahir : '17 januari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 17,
            nama: 'Christian',
            ibu: 'Saul',
            tanggallahir : '1 Januari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 18,
            nama: 'Gerald',
            ibu: 'Patrick',
            tanggallahir : '1 Februari 2020',
            jeniskelamin : 'Laki-laki'
        },
        {
            id: 19,
            nama: 'Fidelis',
            ibu: 'Gonzales',
            tanggallahir : '20 April 2020',
            jeniskelamin : 'Laki-laki'
        },
    );
    res.json(dataAnak);
};

module.exports = {
    dataanak
};