import { Container, Table } from "react-bootstrap";
import NavTopBar from "../../components/NavTopBar";
import { useEffect, useState } from "react";
import { listPegawai } from "../../services/AbsensiService";

const DaftarAbsensi = () => {
    
    const [pegawai, setPegawai] = useState<any[]>([]);

    useEffect(() => {
        listPegawai().then((response) => {
            console.log(response.data);
            setPegawai(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <>
            <NavTopBar />
            <Container>
                <div>
                    <br/>
                    <h5>
                        Daftar Absensi
                    </h5>

                    <Table striped>
                         <thead>
                             <tr>
                             <th>NIK</th>
                             <th>Nama Lengkap</th>
                             <th>Alamat</th>
                             <th>No. HP</th>
                             <th>Username</th>
                             <th>Password</th>
                             <th>Keaktifan Akun</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                pegawai.map(pegawai => 
                                    <tr key={pegawai.id}>
                                        <td>{pegawai.nik}</td>
                                        <td>{pegawai.nmlngkp}</td>
                                        <td>{pegawai.alamat}</td>
                                        <td>{pegawai.nohp}</td>
                                        <td>{pegawai.username}</td>
                                        <td>{pegawai.password}</td>
                                        <td>{pegawai.isactive.toString()}</td>
                                    </tr>
                                    )
                             }
                         </tbody>
                         </Table>
                </div>
            </Container>
        </>
    )
}

export default DaftarAbsensi