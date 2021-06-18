import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: theme.palette.background.paper
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10vh',
        marginLeft: '5vh'
    },
    image: {
        width: '45vh',
        height: '45vh',
        borderRadius: 7,
    },
    informationCard: {
        backgroundColor: '#fff',
        opacity: 0.8,
        borderRadius: 20
    }
}))

export default useStyles