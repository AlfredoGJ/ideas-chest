import React, { useState } from 'react'
import { List, Grid, Fab, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import IdeaListItem from '../idea-list-item/IdeaListItem'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux';
import IdeaEditor from '../idea/Idea';
import { openIdeaEditor } from './../../actions/ideas';
import Button from '@material-ui/core/Button'


 const IdeaList =(props) =>{
    const {ideas, createNewIdea} = props
    const [editorOpen, setEditorOpen] = useState(false);

    return (
        <div>
        <List>
            {ideas.map( idea =>{
                return(
                    <IdeaListItem 
                    title= {idea.title}
                    description = {idea.description}
                    />
                )
            })}
            
        </List>
        <Grid container justify = "flex-end">
            <Fab color = "primary" onClick ={ () => createNewIdea(null)}>
                <AddIcon/>
            </Fab>
        </Grid>
       <IdeaEditor>

       </IdeaEditor>
        </div>
    )
}

const mapStateToProps =(state) =>{
    return {
        ideas: state.ideas,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewIdea: () => { dispatch(openIdeaEditor({}))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList);



