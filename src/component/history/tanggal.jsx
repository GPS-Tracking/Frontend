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
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    }); 
        
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 
        
    return (
        <Card className="mt-6 w-96">

            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Pilih Tanggal
                </Typography>

                <Datepicker 
                    value={value} 
                    onChange={handleValueChange} 
                    showShortcuts={true}
                    displayFormat={"DD/MM/YYYY"}
                />
            </CardBody>

            <CardFooter className="pt-0">
                <Button>Sumbit</Button>
            </CardFooter>

        </Card> 
    );
}; 

export default Tanggal;