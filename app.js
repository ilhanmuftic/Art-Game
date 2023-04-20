const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', function(req, res){
    res.status(404).send({})
});
  
// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
  