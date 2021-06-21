import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5vh',
        marginBottom: '5vh',
        marginLeft: '5vh',
    },
    informationContainerText: {
        width: '40%',
        height: '45vh',
        padding: 20,
        marginLeft: '5vh',
        backgroundColor: '#fff',
        opacity: 0.8,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    image: {
        width: '45vh',
        height: '45vh',
        borderRadius: 7,
    },
    cardContainer: {
        width: '100vw',
        marginTop: '5vh'
    },
    card: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 3px 5px 2px rgba(207, 151, 79, .3)',
    },
    thumbnail: {
        width: 200,
        height: 200, 
        borderRadius: 7,
         
    },
    dividerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    divider: {
        width: '60%'
    },
    highlightTitle:{   
        marginLeft: '5vh', 
        borderWidth: 3, 
        borderStyle: 'solid', 
        borderColor: theme.palette.primary.main,
        width: 200,
        color: theme.palette.primary.main,
        paddingLeft: 20
    },
    root: {
        background: theme.palette.primary.main,
        borderRadius: 3,
        border: 0,
        color: '#fff',
        height: 48,
        padding: '0 30px',
        width: '30%',
        '&:hover': {
            backgroundColor: '#deb887',
          },
    }
}))

export default useStyles