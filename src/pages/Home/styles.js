import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fdf5e6'
    },
    image: {
        height: '100vh',
        backgroundImage: 'url(https://wallpaperaccess.com/full/2671750.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fdf5e6',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    collections: {
        height: '110vh',
    },
    h2: {
        marginBottom: 30
    },
    card: {
        width: 300,
        height: 300, 
        borderRadius: 7 
    },
    showMoreButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#fdf5e6'
    }
}));

export default useStyles;