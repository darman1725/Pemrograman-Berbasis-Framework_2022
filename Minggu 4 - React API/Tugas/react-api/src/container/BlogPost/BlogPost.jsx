import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";


class BlogPost extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            telfon:"",
            angkatan:"",
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`,{method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) =>{
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa',{
            method: 'post',
            headers: {
                'Accept': 'applicarion/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telfon" className="col-sm-2 col-form-label">Telephone</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="telfon" name="telfon" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(artikel => {
                        return <Post key={artikel.id} nim={artikel.nim} nama={artikel.nama} alamat={artikel.alamat} telfon={artikel.telfon} angkatan={artikel.angkatan} status={artikel.status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;