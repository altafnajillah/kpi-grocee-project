import React from 'react';

const TableDev = () => {
    return (
        <div>
            <table className={'table table-auto'}>
                <thead>
                <tr>
                    <td>Tgl Peminjaman</td>
                    <td>Tgl Pengembalian</td>
                    <td>Barang</td>
                    <td>Peminjam</td>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export default TableDev;