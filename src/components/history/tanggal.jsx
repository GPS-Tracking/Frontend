import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import TableHistory from "../history/tableHistory";

const Tanggal = () => {
  const [tanggalAwal, setTanggalAwal] = useState(null);
  const [tanggalAkhir, setTanggalAkhir] = useState(null);

  const handleTanggalAwal = (newTanggalAwal) => {
    setTanggalAwal(newTanggalAwal);
  };

  const handleTanggalAkhir = (newTanggalAkhir) => {
    setTanggalAkhir(newTanggalAkhir);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/data/getFilteredData?start=${tanggalAwal}&end=${tanggalAkhir}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
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

          <CardFooter className="p-0 text-center mt-8">
            <Button onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </CardBody>
      </Card>

      {/* Pass start and end date to TableHistory component */}
      <TableHistory startDate={tanggalAwal} endDate={tanggalAkhir} />
    </div>
  );
};

export default Tanggal;
