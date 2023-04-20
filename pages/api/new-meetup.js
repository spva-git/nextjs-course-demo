import { MongoClient } from "mongodb";
// /api/newmeetup
// POST /api/newmeetup

async function handler(req,res) {
    if(req.method === 'POST') { 
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://emailtosandp:EasyPass0312%40.@mymongo.tg4fxzb.mongodb.net/meetups?retryWrites=true&w=majority')

        const db = client.db();
        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted'});

    }
}

export default handler;
