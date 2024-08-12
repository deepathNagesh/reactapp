import { Box } from "@mui/material";
import Header from "./header";
import SideBar from "./sidebar";
import { useState } from "react";
import MainPage from "../mainpage/index";
export default function Homepage() {
    const [show, setShow] = useState(true);
    const hideDrawer = (newOpen) => () => {
            setShow ( (newOpen) => !newOpen);
    };

    const onClose = () => {
        setShow(false);
    };
    return (
        <Box display={"flex"} sx={{p:2}}>
            <Header hideDrawer={hideDrawer}> </Header>
            <SideBar onShow={show} onClose={onClose}>
            </SideBar>
            <MainPage></MainPage>

        </Box>
    );
}
