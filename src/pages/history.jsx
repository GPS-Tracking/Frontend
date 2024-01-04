import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import DefaultSidebar from "../component/Sidebar";
import Tanggal from "../component/history/tanggal";


function History() {
    return(
        <div className="flex">
            <DefaultSidebar />
            <div className="flex flex-wrap justify-center p-5 h-full">
                <Card className="mt-6 w-96">

                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Pilih Tanggal
                        </Typography>

                        <Tanggal />
                    </CardBody>

                    <CardFooter className="pt-0">
                        <Button>Sumbit</Button>
                    </CardFooter>

                </Card>
            </div>
        </div>
    )
}

export default History;
