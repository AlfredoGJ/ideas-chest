import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Facebook from '@material-ui/icons/Facebook'
import ListItemText from '@material-ui/core/ListItemText'

export default  (props)=>{
    const {title, description} = props;

    return (
        <ListItem button >
            <ListItemIcon>
                <Facebook/>
            </ListItemIcon>
            <ListItemText
            
            primary = {title}
                secondary = {description}
                >
            </ListItemText>
        </ListItem>
    )
}