/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex sx={{ width : '100%'}}>
      <Container >
        <Box sx={styles.buttonGroup} className='button__group' >
          <button onClick={previous} aria-label='Previous'>
            {IoIosArrowRoundBack}
            Previous
          </button>
          <button onClick={next} aria-label='Next'>
          {IoIosArrowRoundForward}
            Next
          </button>
        </Box>
      </Container>
    </Flex>
  );
}

const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: 20,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 20,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      ml: 5,
      '&:hover': {
        color: 'text',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
