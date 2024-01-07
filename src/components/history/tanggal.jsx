import React, {useState} from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker"; 

const Tanggal = () => {
    /* Tanggal Awal */
    const [tanggalAwal, setTanggalAwal] = useState(null);

    const handleTanggalAwal = (newTanggalAwal) => {
        console.log("newTanggalAwal:", newTanggalAwal);
        setTanggalAwal(newTanggalAwal);
    };

    /* Tanggal Akhir */
    const [tanggalAkhir, setTanggalAkhir] = useState(null);

    const handleTanggalAkhir = (newTanggalAkhir) => {
        console.log("newTanggalAkhir:", newTanggalAkhir);
        setTanggalAkhir(newTanggalAkhir);
    };

    const handleSubmit = () => {
        /* summit button */
    };

    return (
        <div>
            <Card className="w-auto">
                <CardBody>
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Typography variant="h5" color="blue-gray" className="mb-3">
                                Tanggal Awal
                            </Typography>

                            <Datepicker
                                showShortcuts={true} 
                                useRange={false}
                                asSingle={true}
                                value={tanggalAwal}
                                onChange={handleTanggalAwal}
                                displayFormat={"DD/MM/YYYY"}
                                placeholder={"Tanggal Awal"}
                            />
                        </div>

                        <div>
                            <Typography variant="h5" color="blue-gray" className="mb-3">
                                Tanggal Akhir
                            </Typography>

                            <Datepicker
                                showShortcuts={true}
                                useRange={false}
                                asSingle={true}
                                value={tanggalAkhir}
                                onChange={handleTanggalAkhir}
                                displayFormat={"DD/MM/YYYY"}
                                placeholder={"Tanggal Akhir"}
                            />
                        </div>
                    </div>
  
                    <CardFooter>
                        <Button onClick={handleSubmit} className="ml-96">
                            Submit
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    );
}; 

export default Tanggal;