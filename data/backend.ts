import Language from '@/interfaces/language';

import node from '@/assets/icons/node.svg';
import express from '@/assets/icons/express.svg';
import nest from '@/assets/icons/nest.svg';
import docker from '@/assets/icons/docker.svg';
import mysql from '@/assets/icons/mysql.svg';
import postgres from '@/assets/icons/postgres.svg';
import mongo from '@/assets/icons/mongo.svg';

const frontend: Language[] = [
  {
    id: '78e02e3c-4074-484c-a6ce-545d386a5966',
    title: 'NODE',
    iconType: node,
  },
  {
    id: '9855a4ca-48df-458b-9eec-256059073373',
    title: 'EXPRESS',
    iconType: express,
  },
  {
    id: '1392881d-a704-48f8-9c99-650b69626d6f',
    title: 'NESTJS',
    iconType: nest,
  },
  {
    id: 'a6e98a9b-e788-4cf8-b31c-00f0347454d7',
    title: 'DOCKER',
    iconType: docker,
  },
  {
    id: 'ede5e5b0-7307-4ebb-be57-19757daf27c2',
    title: 'MYSQL',
    iconType: mysql,
  },
  {
    id: 'ee82c055-4b62-435b-bfc8-79d4e8718aff',
    title: 'POSTGRES',
    iconType: postgres,
  },
  {
    id: '328a7a91-33bf-43ca-bce8-9e9f3c91eb24',
    title: 'MONGODB',
    iconType: mongo,
  },
];

export default frontend;
