//Function Component try :D
import React from 'react';
import { Badge } from 'reactstrap';
const ToolsBadge = (props) => {
      const toolsArray = props.tools.split(',');
  return (
      toolsArray.map((tool) => {
        return (
            <Badge color='primary' pill className='mr-1'>
               {tool}
            </Badge>
        ) 
      })
  );
};
export default ToolsBadge;