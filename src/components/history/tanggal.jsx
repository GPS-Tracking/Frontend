import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import TableHistory from "./TableHistory"; // Import the TableHistory component

const Tanggal = () => {
  const [tanggalAwal, setTanggalAwal] = useState(null);
  const [tanggalAkhir, setTanggalAkhir] = useState(null);

  const handleTanggalAwal = (newTanggalAwal) => {
    setTanggalAwal(newTanggalAwal);
  };

  const handleTanggalAkhir = (newTanggalAkhir) => {
    setTanggalAkhir(newTanggalAkhir);
  };

  return (
    <div>
      <Card className="w-auto">
        <CardBody>
          <div className="grid grid-cols-2 gap-10">
            {/* ... (your date pickers) */}
          </div>

          <CardFooter className="p-0 text-center mt-8">
            <Button onClick={handleSubmit} className="ml-96">
              Submit
            </Button>
          </CardFooter>
        </CardBody>
      </Card>

      {/* Pass start and end date to TableHistory component */}
      <TableHistory startDate={tanggalAwal} endDate={tanggalAkhir} />
    </div>
  );
};

export default Tanggal;
