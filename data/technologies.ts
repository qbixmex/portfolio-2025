import { ComponentType } from 'react';
import ReactIcon from '@/assets/icons/react.svg';
import css3 from '@/assets/icons/css3.svg';
import html5 from '@/assets/icons/html5.svg';
import github from '@/assets/icons/github.svg';
import javascript from '@/assets/icons/javascript.svg';
import nextJs from '@/assets/icons/next-js.svg';
import typescript from '@/assets/icons/typescript.svg';

type Technology = {
  id: string;
  title: string;
  iconType: ComponentType;
};

const technologies: Technology[] = [
  {
    id: 'fda479a1-b735-451c-a2c0-ba33b1bc63c8',
    title: 'React',
    iconType: ReactIcon,
  },
  {
    id: 'f6b884bd-ce44-4150-8554-05195eafbf21',
    title: 'CSS3',
    iconType: css3,
  },
  {
    id: '1f133637-3251-446d-a7c0-65c472485fdd',
    title: 'HTML',
    iconType: html5,
  },
  {
    id: '02590476-c72c-4f15-802d-790f66ae930e',
    title: 'Javascript',
    iconType: javascript,
  },
  {
    id: '0f008344-ad46-424b-8545-da9c77446be5',
    title: 'Github',
    iconType: github,
  },
  {
    id: '5fd6bb49-d021-403b-8445-a81cd671b144',
    title: 'NextJS',
    iconType: nextJs,
  },
  {
    id: 'c91421a0-51e6-4b36-917b-110848bb6964',
    title: 'Typescript',
    iconType: typescript,
  },
];

export default technologies;
