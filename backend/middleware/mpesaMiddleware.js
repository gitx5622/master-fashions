import axios from "axios";
import asyncHandler from "express-async-handler";

const getOAuthToken = async (req, res, next) => {

    let consumer_key = process.env.consumer_key;
    let consumer_secret = process.env.consumer_secret;

    let url = process.env.oauth_token_url;

    //form a buffer of the consumer key and secret
    let buffer = new Buffer.from(consumer_key+":"+consumer_secret);

    let auth = `Basic ${buffer.toString('base64')}`;

    try{

        let {data} = await axios.get(url,{
            "headers":{
                "Authorization":auth
            }
        });

        req.token = data['access_token'];

        return next();

    }catch(err){

        return res.send({
            success:false,
            message:err['response']['statusText']
        });

    }
    
};

const lipaNaMpesaOnline = asyncHandler(async(req,res) => {
    // let token = req.token;
    let auth = `Bearer 3u2BWGYspB0VBd4tNMQNUExpjcWT`;       

    // //getting the timestamp
    // let timestamp = new Date().valueOf()

    // let url = process.env.lipa_na_mpesa_url;
    // let bs_short_code = process.env.lipa_na_mpesa_shortcode;
    // let passkey = process.env.lipa_na_mpesa_passkey;

    // let password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');
    // let transcation_type = "CustomerPayBillOnline";
    // let amount = "1"; //you can enter any amount
    // let partyA = "party-sending-funds"; //should follow the format:2547xxxxxxxx
    // let partyB = process.env.lipa_na_mpesa_shortcode;
    // let phoneNumber = "party-sending-funds"; //should follow the format:2547xxxxxxxx
    // let callBackUrl = "your-ngrok-url/mpesa/lipa-na-mpesa-callback";
    // let accountReference = "lipa-na-mpesa-tutorial";
    // let transaction_desc = "Testing lipa na mpesa functionality";

    try {

        let {data} = await axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",{
            "BusinessShortCode": 174379,
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNzA0MjA0NzQ1",
            "Timestamp": "20230704204745",
            "TransactionType": "CustomerPayBillOnline",
            "Amount": 1,
            "PartyA": 254711985068,
            "PartyB": 174379,
            "PhoneNumber": "254711985068",
            "CallBackURL": "https://mydomain.com/path",
            "AccountReference": "CompanyXLTD",
            "TransactionDesc": "Payment of X" 
        },{
            "headers":{
                "Authorization":auth
            }
        }).catch(console.log);

        return res.send({
            success:true,
            message:data
        });

    }catch(err){

        return res.send({
            success:false,
            message:err['response']['statusText']
        });

    }
});

export { lipaNaMpesaOnline, getOAuthToken };