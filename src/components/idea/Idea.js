import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/NativeSelect'
import Chip from '@material-ui/core/Chip'
import './Idea.css'
import FaceIcon from '@material-ui/icons/Done';


export default () => {

    return (
        <Grid container direction = "column" alignItems ="stretch" spacing ={2} className ={"container"}>
            <Grid item >
                <TextField
                inputProps ={{style:{fontSize:"1.8rem"}}}  
                placeholder = "Title" 
                fullWidth variant= "filled" 
                className ={"idea-title"}/>
            </Grid>
            <Grid item >
                <TextField 
                multiline
                placeholder = "Description" 
                fullWidth
                rows ={5}
                rowsMax ={8}
                variant ="filled"
                inputProps ={{style:{fontSize:"1.5rem"}}}
                className ={"idea-description"}/>

            </Grid>
            <Grid item direction = "column" justify="space-around">

                <Grid container spacing = {1} >
                    <Grid item>
                        <Chip 
                            label= "Work" 
                            onDelete ={ () => 3 }
                            icon={<FaceIcon />}
                            color = "primary"
                        />
                    </Grid>
                    
                    <Grid item>
                        <Chip 
                            label= "Healthy food" 
                            onDelete ={ () => 3 }
                            icon={<FaceIcon />}
                            color = "primary"
                        />
                    </Grid>

                    <Grid item>
                        <Chip 
                            label= "Science" 
                            onDelete ={ () => 3 }
                            icon={<FaceIcon />}
                            color = "primary"
                        />
                    </Grid>

                    <Grid item>
                        <Chip 
                            label= "DIY" 
                            onDelete ={ () => 3 }
                            icon={<FaceIcon />}
                            color = "primary"
                        />
                    </Grid>
                </Grid>
                <Select variant= "filled" fullWidth>
                    
                </Select>

            </Grid>
            <Grid item container justify ="flex-end">
                
                <Grid item >
                    <Button variant = "contained" color="primary">
                        Save
                    </Button>
                </Grid>
                
            </Grid>
             
        </Grid>



    )
}