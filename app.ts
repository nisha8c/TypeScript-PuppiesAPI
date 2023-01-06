import express from 'express';
import cors from 'cors';

import { Request, Response, Application } from 'express';
import { PuppyData } from 'types';

const app: Application = express();
app.use(express.json());
app.use(cors());

const puppies: PuppyData[] = [
  {
      id: 1,
      breed: 'Pup',
      name: 'Puppy1',
      birthdate: new Date(2000, 2, 1)
  },
  {
      id: 2,
      breed: 'Puppy',
      name: 'Duck',
      birthdate: new Date(2000, 3, 1),
  },
  {
    id: 3,
    breed: 'PupPup',
    name: 'Mario',
    birthdate: new Date(2000, 1, 1)
},
{
    id: 4,
    breed: 'PuppyPup',
    name: 'Choco',
    birthdate: new Date(2000, 4, 1),
},
];

const getAllPuppiesInformation = (_req: Request, res: Response) => {
  res.status(200).json(puppies);
};

const getPuppyById = (_req: Request, res: Response) => {
  const id = Number(_req.params.id);
  const puppy = puppies.find(p => p.id === id);
  if (puppy) {
    res.status(200).json(puppy);
  } else {
    res.status(404).json({
      message: 'Puppy with id '+ id +' not found'
    });
  }
}

const updatePuppy = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  console.log('body :' + req.body);
  const puppy = puppies.find(p => p.id === id);
  if (puppy) {
    console.log('in PUT call : ' + puppy);
    puppy.breed = req.body.breed;
    puppy.name = req.body.name;
    puppy.birthdate = req.body.birthdate;

    res
      .status(200)
      .json(puppy);
  } else {
    res.status(404).json({
      message: 'Puppy with id '+ id +' not found'
    });
  }
};

const deletePuppy = (_req: Request, res: Response) => {
  const id = Number(_req.params.id);
  const puppy = puppies.find(p => p.id === id);
  if (puppy) {
    puppies.splice(puppies.indexOf(puppy), 1);
    res
      .status(200)
      .json({
        message: 'Puppy deleted successfully'
      });
  } else {
    res.status(404).json({
      message: 'Puppy with id '+ id +' not found'
    });
  }
};

const addPuppy = (req: Request, res: Response) => {
  const puppy = {
    id: puppies.length + 1,
    breed: req.body.breed,
    name: req.body.name,
    birthdate: req.body.birthdate
  }
  
  puppies.push(puppy);
  res
    .status(201)
    .json({
      message: 'Puppy added successfully'
    });
};

app.get('/api/puppies', getAllPuppiesInformation); 
app.get('/api/puppies/:id', getPuppyById);
app.post('/api/puppies', addPuppy);
app.put('/api/puppies/:id', updatePuppy);
app.delete('/api/puppies/:id', deletePuppy); 

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

export default app;







//CURL command
/*

curl http://localhost:3000/api/puppies -i
curl -X PUT -H "Content-Type: application/json" -d '{"name":"choco","birthdate":"3/08/1989"}' "http://localhost:3000/api/puppies/2"
curl --header "Content-Type: application/json" --request POST --data '{"breed":"abc","name":"Vanilj","birthdate":"2/03/1998"}' http://localhost:3000/api/puppies
curl -X DELETE http://localhost:3000/api/puppies/1

curl -X POST -H 'Content-Type: application/json' -d '{
  "breed": "testbreed1",
  "name": "test1",
  "birthdate": ""2/03/1998""
}' http://localhost:3000/api/puppies -i
*/