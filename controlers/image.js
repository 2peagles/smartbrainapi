const Clarifai = require ('clarifai');  

const app = new Clarifai.App({
    apiKey: '02aeede7470e401ba33ddd9059f2f56c'
   });
   const handleApiCall = ( req, res => {
    app.models.predict (Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then (data => {
        res.json(data);
    })
    .catch (err => res.status(400).json ('unable to work with API'))
   })
const handleImage = ('./image', (req,res) => {
    const { id } = req.bodys;
    db( 'users' ).where(  'id', '=', id )
    .increment( 'entries' , 1 )
    .returning ('entries')
    .then(entries =>{
    res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json)('unable to get entries')
})
export default
    handleImage 
    handleApiCall;