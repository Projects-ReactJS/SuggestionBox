import React from 'react';
//import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import  '@ui5/webcomponents/dist/Select';
import  '@ui5/webcomponents/dist/Option';
import "@ui5/webcomponents/dist/TextArea";

import { Input } from 'antd';

import './App.css';
import './Main.css';

const { TextArea } = Input;

function App() {
	function onclickbutton(evt) {
		console.log('button clicked');
	}

	return (
		<div class="gridContainer">
			<Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
				<Grid item lg={12} xs={12}>
					<AppBar position="fixed">
						<Toolbar>
							<Typography variant="h6">Suggestion Box</Typography>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item lg={4} xs={12}>
					<div className="listItemContainer">
						<Typography variant="h7">Status</Typography>
						{/* <TextField id="select" variant="outlined" style={{ padding: '1em', width: '80%' }} select>
							<MenuItem value="10">Ten</MenuItem>
							<MenuItem value="20">Twenty</MenuItem>
						</TextField> */}
						<ui5-select value-state="Success" style={{width:'70%'}} class="select">
							<ui5-option icon="meal" selected>
								Apple
							</ui5-option>
							<ui5-option icon="meal">Avocado</ui5-option>
							<ui5-option icon="meal">Mango</ui5-option>
						</ui5-select>
					</div>
				</Grid>

				<Grid item lg={4} xs={8}>
					{/* <TextField id="standard" variant="outlined" style={{ padding: '1em', width: '100%' }} />
					 */}
					<div className="listItemContainer">
						<Typography variant="h7" style={{ marginBottom: '0.5em' }}>
							Suggestions
						</Typography>
						{/* <TextArea rows={4} style={{ marginLeft: '1em', padding: '3em', width: '100%' }} /> */}
						<ui5-textarea placeholder="Type some text"  rows="10" maxlength="100" show-exceeded-text></ui5-textarea>

					</div>
				</Grid>

				<Grid item lg={4} xs={4}>
					<Tooltip title="Add" aria-label="add">
						<IconButton
							variant="contained"
							onClick={onclickbutton}
							style={{ backgroundColor: '#3f51b5', marginLeft: '5em', color: 'white', padding: '1.2em' }}
							color="primary"
							size="large"
						>
							<AddIcon fontSize="inherit" />
						</IconButton>
					</Tooltip>
				</Grid>

				<Grid item lg={12} xs={12}>
					<List>
						<ListItem alignItems="flex-start">
							<div className="listItemContainer">
								<div>
									<p>Status</p>
								</div>
								<div>
									<p>
										Description is the pattern of narrative development that aims to make vivid a
										place, object, character, or group.
									</p>
								</div>
								<div>
									<Rating></Rating>
								</div>
							</div>
						</ListItem>
						<ListItem alignItems="flex-start">
							<div className="listItemContainer">
								<div>
									<p>Status</p>
								</div>
								<div>
									<p>
										Description is the pattern of narrative development that aims to make vivid a
										place, object, character, or group.
									</p>
								</div>
								<div>
									<Rating></Rating>
								</div>
							</div>
						</ListItem>
						<ListItem alignItems="flex-start">
							<div className="listItemContainer">
								<div>
									<p>Status</p>
								</div>
								<div>
									<p>
										Description is the pattern of narrative development that aims to make vivid a
										place, object, character, or group.
									</p>
								</div>
								<div>
									<Rating></Rating>
								</div>
							</div>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
