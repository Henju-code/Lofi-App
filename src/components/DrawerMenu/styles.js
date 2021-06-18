import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wavesBackground:{
		width: 400
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '5vh'
	},
	boxAvatar: {
		width: 270,
		height: 270
	},
	boxText: {
		fontSize: 20,
		fontWeight: 600,
		color: '#8f8f8f',
		margin: 10
	},
	listContainer: {
		width: 400,
		backgroundColor: theme.palette.background.paper
	},
	divider: {
		width: '60%',
	},
	listItemText: {
		fontSize: 18,
		color: theme.palette.primary.main,
		textAlign: 'center',
	},
	button: {
		width: 100,
		color: 'red',
		borderColor: 'red'
	}
}))

export default useStyles
