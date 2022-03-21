import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {                    // komponen state React untuk statefull component
        listArtikel:[],          // variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {         // variabel yang digunakan menampung sementara data yang akan di insert
            userId: 1,           // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json 
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {                   // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        fetch('http://localhost:3001/posts')           // penambahan sort dan order berdasarkan parameter
            .then(response => response.json())         // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {           // data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {              // komponen untuk mengecek ketika component telah di-mount-img, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {   // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})  // alamat URL API yang ingin kita HAPUS datanya
            .then(res => {     // ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {    //fungsi untuk meng-handle form tambah data artikel
        let formInsertArtikel = {...this.state.insertArtikel};      //clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       //digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yang diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {                //fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3001/posts', {
            method: 'post',                    // method POST untuk input/insert data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)   //kirimkan ke body request untuk data artikel yang ditambahkan (insert)
        })

            .then((Response) => {
                this.ambilDataDariServerAPI();               // reload /refresh data                
            });
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;