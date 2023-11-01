export default {

  separator: {
    border: '1px solid #f0f0f0',
    marginTop: '2vh',
    width: '90%',
    marginLeft: '2vw'

  },
  main: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '1400px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    paddingTop: '4vh',
    paddingBottom: '4vh',
    maxWidth: '60%',
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'center',
    marginTop: '0 20px'
  },

  text: {

    backgroundColor: 'white',
    // maxWidth: '40%',
    order: '2',
    flex: '1 0 30%',
    alignSelf: 'flex-start'
  }
}
