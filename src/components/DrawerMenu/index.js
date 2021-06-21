import React from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
	Button,
	Box,
	Avatar,
	Typography
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { hide } from '../../store/Drawer/Drawer.actions'
import useStyles from './styles'
import avatarDefault from '../../assets/defaultAvatar.png'
import waves from '../../assets/waves.png'

const drawerMenuOptions = ['Profile', 'My Collections', 'Settings', 'Support']

function DrawerMenu() {
	const classes = useStyles()

	const dispatch = useDispatch()
	const visible = useSelector(state => state.drawer)

	const user = JSON.parse(localStorage.getItem('@user'))

	const loggout = () => {
		localStorage.clear()
		window.location.reload()
	}

	return (
		<Drawer
			anchor={'left'}
			onClose={() => {
				dispatch(hide())
			}}
			open={visible}
		>
			<img alt="wave" src={waves} className={classes.wavesBackground} />

			<Box className={classes.box}>
				<Avatar
					alt="user avatar"
					src={user.data[0].avatar}
					className={classes.boxAvatar}
				/>
				<Typography
					classes={{
						root: classes.boxText
					}}
				>
					{user.data[0].name}
				</Typography>
			</Box>

			<Box className={classes.container}>

				<Divider className={classes.divider} />

				<List className={classes.listContainer}>
					{drawerMenuOptions.map((menuOption) => (
						<ListItem button key={menuOption}>
							<ListItemText
								primary={menuOption}
								classes={{
									primary: classes.listItemText
								}} />
						</ListItem>
					))}
				</List>

				<Button
					variant="outlined"
					className={classes.button}
					onClick={() => {
						loggout()
					}}
				>
					Exit
				</Button>
			</Box>
		</Drawer>
	);
}

export default DrawerMenu;