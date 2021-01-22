function getServerTime() {
    return $.ajax({async: false}).getResponseHeader( 'Date' );
  }
  console.log('Server Time: ', getServerTime());
  console.log('Locale Time: ', new Date(getServerTime()));
