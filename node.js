var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'CdmU5HmWCNZqcesaLdoCEnFwV',
  consumer_secret:      'IU8lm9SbGGAV2DoLeR1o39MhM4REnd5P2GFIDck6LNGtkzydFy',
  access_token:         '974010792118050817-o0WeiB6LIwgHoOCbVfNYBD8R1D72muE',
  access_token_secret:  'YdYfTMRrewgbxNyt2maT45FbTYLlYdY51jwFGVsxQ3nVF',
  timeout_ms:           60*1000,   
})

// searches twitter for phrase/word posted in the string since the date below
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })