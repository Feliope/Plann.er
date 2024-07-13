import fastify from 'fastify';
import cors from '@fastify/cors';
import { createTrip } from './routes/create-trip';
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod';
import { confirmTrip } from './routes/confirm-trip';
import { confirmParticipants } from './routes/confirm-participant';

const app = fastify();

app.register(cors, {
  origin: 'https://localhost:3000',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipants);

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333!')
}) 