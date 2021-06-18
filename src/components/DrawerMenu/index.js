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
					alt="Remy Sharp"
					src={avatarDefault}
					className={classes.boxAvatar}
				/>
				<Typography
					classes={{
						root: classes.boxText
					}}
				>
					New User
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

				<Button variant="outlined" className={classes.button}>
					Exit
				</Button>
			</Box>
		</Drawer>
	);
}

export default DrawerMenu;