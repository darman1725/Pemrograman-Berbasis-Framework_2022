import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postMahasiswa = (DataDikirim) => PostAPI('mahasiswa', DataDikirim);
const deleteMahasiswa = (DataDihapus) => DeleteAPI('mahasiswa', DataDihapus);

const API = {
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}

export default API;