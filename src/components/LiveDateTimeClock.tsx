import { useEffect, useState } from "react"

export default function LiveDateTime() {
    var [date, setDate] = useState(new Date());
    
    let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

    let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanUp() {
            clearInterval(timer);
        }
    });

    return (
        <>
            <div>
                <p>Time : {date.toLocaleTimeString()}</p>
                <p>Date : {hari[date.getDay()-1]}, {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</p>
            </div>
        </>
    )
}