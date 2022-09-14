import React from 'react';
import { Box } from '@mui/material';
import BodyParts from '../bodyPart/BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
	return (
		<ScrollMenu>
			{data.map((item) => {
				return (
					<Box
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						m='0 40px'>
						<BodyParts
							item={item}
							bodyPart={bodyPart}
							setBodyPart={setBodyPart}
						/>
					</Box>
				);
			})}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
