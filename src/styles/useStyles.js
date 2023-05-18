import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    },
    //header styles
    header: {},
    title: {
        flexGrow: 1
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px"
    },
    //main content styles
    main: {
        position: 'relative',
        flexGrow: 1
    },
    //titles style
    pageTitle: {
        marginBottom: '0px!important'
    },
    //home page styles
    homePageContent: {
        position: "relative",
        padding: '50px!important',
        paddingTop: '110px!important',
        display: 'flex!important',
        height: '100%'
    },
    homePageLeftContent: {
        padding: '10px',
        paddingLeft: '20px!important'
    },
    homePageText: {
        width: '80%'
    },
    link: {
        fontSize: '20px'
    },
    homePageImageContainer: {
        width: '45%',
        height: '100%',
        display: "flex"
    },
    //auth page styles
    authPageOutContainer: {
        height: 'inherit',
        width: 'inherit',
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center'
    },
    twoColumnForm: {
        display: "flex",
        flexDirection: 'row',
    },
    authFormCheckbox: {
        display: 'flex',
        alignItems: 'center'
    },
    //auth form styles
    formPaper: {
        display: 'flex',
        wrap: 'wrap',
        flexDirection: 'column',
        padding: '30px',
        maxWidth: '500px'
    },
    authFormButtons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    formSection: {
        margin: '10px'
    },
    //email verification page
    paper: {
        padding: '20px'
    },
    //form styles
    formItem: {
        margin: '5px!important'
    },
    formItemLabel: {
        marginLeft: '5px!important'
    },
    //sidebar
    sidebar: {
        position: 'fixed',
        height: '100%',
        backgroundColor: '#1d1d1d',
        paddingTop: '60px',
    },
    sidebarMenu: {
        width: '100%',
        backgroundColor: '#1d1d1d',
        margin: '10px'
    },
    proSidebarInner: {
        position: 'fixed'
    },
    //profile page
    profileContent: {
        paddingTop: '80px',
        paddingLeft: '290px'
    },
    userAccessArea: {
        display: "flex",
        direction: "row",
    },
    userAccessAreaItem: {
        margin: "10px!important"
    },
    //order page
    orderFormPaper: {
        height: '400px',
        width: '510px',
        padding: '40px 30px',
        flexDirection: 'column',
        backgroundColor: 'transparent!important'
    },
    stepper: {
        height: '20%'
    },
    orderFormOutsideContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        padding: '30px',
    },
    orderFormInsideContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    orderFormButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    masterPick: {
        width: '425px',
        height: '250px'
    },
    //data table
    dataTable: {
        height: '400px',
        border: '4px double black',
        display: 'flex',
        marginRight: '20px'
    },
    iconButton: {
        width: '50px',
        height: '50px'
    },
    //admin order form
    adminOrderForm: {
        display: 'flex'
    },
    adminOrderFormSide: {
        width: '50%',
        padding: '10px',
    },
    //dialog
    dialog: {
        overflow: 'hidden!important'
    },
    //backdrop
    backdrop: {
        color: '#fff',
        zIndex: -1
    },
    //helper text
    helperText: {
        marginTop: '0px!important',
        marginLeft: '20px!important'
    },
    //filtration form
    filtrationForm: {
        marginLeft: '0px!important',
    },
    filtrationFormItem: {
        margin: '10px!important',
        width: '200px!important',
        height: '90px!important'
    },
    filter: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
    },
    filterFormSection: {
        margin: '5px'
    },
    //yesNoChooseField
    yesNoChooseField: {
        display: "flex",
        flexDirection: "row!important"
    }
}));

export default useStyles;