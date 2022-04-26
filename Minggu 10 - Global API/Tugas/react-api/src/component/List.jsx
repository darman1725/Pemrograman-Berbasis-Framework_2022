import React from "react";

const List = (props) => {
    return (
        <div className="col-lg-6 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
            <div className="services-block-three">
                    <div className="row">
                        <div className="col-3"><h4>NIM</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.nim}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><h4>Nama</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.nama}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><h4>Alamat</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.alamat}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><h4>No. HP</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.hp}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><h4>Angkatan</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.angkatan}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-3"><h4>Status</h4></div>
                        <div className="col-9"><p className="xs-font-size13 xs-line-height-22">{props.status}</p></div>
                    </div>
                    <button className="btn btn-sm btn-danger" onClick={() =>props.hapusData(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}
export default List;
