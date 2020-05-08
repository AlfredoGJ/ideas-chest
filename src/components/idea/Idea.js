import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/NativeSelect'
import Chip from '@material-ui/core/Chip'
import '../../App.css'
import FaceIcon from '@material-ui/icons/Done';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { connect } from 'react-redux';
import { closeIdeaEditor } from '../../actions/ideas'
import { addIdea } from './../../actions/ideas';


const IdeaEditor = (props) => {
    const { isOpen, currentIdea, setEditorClose, addIdea } = props;
    const titleInput = useRef(null)
    const descriptionInput = useRef(null);

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={isOpen}
            onClose={() => setEditorClose()}
        >
            <DialogTitle>
                New Idea
        </DialogTitle>
            <DialogContent>
                <Grid container direction="column" alignItems="stretch" spacing={2} className={"container"}>
                    <Grid item >
                        <TextField
                            inputProps={{ style: { fontSize: "1.8rem" } }}
                            placeholder="Title"
                            fullWidth variant="filled"
                            inputRef={titleInput}
                            className={"idea-title"} />
                    </Grid>
                    <Grid item >
                        <TextField
                            inputRef={descriptionInput}
                            multiline
                            placeholder="Description"
                            fullWidth
                            rows={5}
                            rowsMax={8}
                            variant="filled"
                            inputProps={{ style: { fontSize: "1.5rem" } }}
                            className={"idea-description"} />

                    </Grid>
                    <Grid item direction="column" justify="space-around">

                        <Grid container spacing={1} >
                            <Grid item>
                                <Chip
                                    label="Work"
                                    onDelete={() => 3}
                                    icon={<FaceIcon />}
                                    color="primary"
                                />
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="Healthy food"
                                    onDelete={() => 3}
                                    icon={<FaceIcon />}
                                    color="primary"
                                />
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="Science"
                                    onDelete={() => 3}
                                    icon={<FaceIcon />}
                                    color="primary"
                                />
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="DIY"
                                    onDelete={() => 3}
                                    icon={<FaceIcon />}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                        <Select variant="filled" fullWidth>

                        </Select>

                    </Grid>
                    <Grid item container justify="flex-end">

                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="text" onClick={() => setEditorClose()}>
                    cancel
        </Button>
                <Button color="primary" variant="contained" onClick={() => addIdea({ title: titleInput.current.value, description: descriptionInput.current.value })}>
                    Save Idea
        </Button>
            </DialogActions>
        </Dialog>

    )
}


const mapStateToProps = (state) => {
    return {
        isOpen: state.editorOpen,
        currentIdea: {}
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("OWNPROPS", ownProps);
    return {
        setEditorClose: () => dispatch(closeIdeaEditor()),
        addIdea: (idea) => dispatch(addIdea(idea))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaEditor)