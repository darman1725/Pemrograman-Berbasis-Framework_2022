import React, { Component } from "react";
import List from "../component/List";
import API from "../services";
import './ListMahasiswa.css';

class ListMahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nim: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result => {
            this.setState( {
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        API.deleteMahasiswa(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    handleTambahData = (event) => {
        let formInsrtMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsrtMahasiswa['id'] = timestamp;
        this.setState({status : event.target.value});
        formInsrtMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsrtMahasiswa
        });
    }

    handleTombolSimpan = () => {
        API.postMahasiswa(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <br></br>
                <h2 className="text-center">Daftar Mahasiswa</h2>
                <br></br>
                <div className="row">
                    <div className="addform col-4">
                        <div className="card shadow">
                            <h4 className="text-center">Tambah Data Mahasiswa</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nim" className="col-sm-3 col-form-label">NIM</label>
                                    <input type="number" className="form-control" id="nim" name="nim" onChange={this.handleTambahData} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nama" className="col-sm-3 col-form-label">Nama</label>
                                    <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahData} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="alamat" className="col-sm-3 col-form-label">Alamat</label>
                                    <textarea type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahData}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hp" className="col-sm-3 col-form-label">No. HP</label>
                                    <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahData} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="angkatan" className="col-sm-3 col-form-label">Angkatan</label>
                                    <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahData} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status" className="col-sm-3 col-form-label">Status</label>
                                    <select value={this.state.value} className="form-select" name="status" id="status" form="carform" onChange={this.handleTambahData}>
                                        <option selected="true" disabled="disabled"></option> 
                                        <option value="Aktif">Aktif</option>
                                        <option value="Cuti">Cuti</option>
                                        <option value="Lulus">Lulus</option>
                                    </select>
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-success w-100" onClick={this.handleTombolSimpan}>Simpan</button>
                                <button type="reset" className="btn btn-danger w-100">Reset</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.listMahasiswa.map(mahasiswa => {
                                        return <List key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat}
                                            hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status}
                                            hapusData={this.handleHapusMahasiswa} idMahasiswa={mahasiswa.id} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListMahasiswa;