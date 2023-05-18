import React from 'react';
import {compose} from "redux";
import {withHeader} from "../../../functions/withHeader";
import {Box, Container, Typography} from "@mui/material";
import useStyles from "../../../styles/useStyles";
import Page from "../../../styles/Page";
import {useTranslation} from "react-i18next";

const HomePage = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <Page>
            <Container fixed className={classes.homePageContent}>
                <Box className={classes.homePageLeftContent}>
                    <Box className={classes.homePageText}>
                        <Typography>Fur Factory Home Page</Typography>
                    </Box>
                </Box>
            </Container>
        </Page>
    )
}

export default compose(withHeader)(HomePage);