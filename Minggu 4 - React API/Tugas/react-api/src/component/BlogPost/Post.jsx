import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
                    </div>
                    <div className="konten-artikel">
                        <p className="nim">Nim : {props.nim}</p>
                        <p className="nama">Nama : {props.nama}</p>
                        <p className="alamat">Alamat : {props.alamat}</p>
                        <p className="telfon">Telfon : {props.telfon}</p>
                        <p className="angkatan">Angkatan : {props.angkatan}</p>
                        <p className="status">Status : {props.status}</p>

                        <button className="btn btn-sm btn-warning" onClick={() =>props.hapusArtikel(props.idArtikel)}>Hapus</button>
                    </div>
                </div>
    )
}

export default Post;