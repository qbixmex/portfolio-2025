import php from '@/assets/icons/php.svg';
import javascript from '@/assets/icons/javascript.svg';
import java from '@/assets/icons/java.svg';
import typescript from '@/assets/icons/typescript.svg';
import python from '@/assets/icons/python.svg';
import kotlin from '@/assets/icons/kotlin.svg';
import Language from '@/interfaces/language';

// Tools: Visual Studio Code, Git, Github, Figma, Photoshop, Premiere.


const languages: Language[] = [
  {
    id: '02590476-c72c-4f15-802d-790f66ae930e',
    title: 'Javascript',
    iconType: javascript,
  },
  {
    id: 'c91421a0-51e6-4b36-917b-110848bb6964',
    title: 'Typescript',
    iconType: typescript,
  },
  {
    id: 'fda479a1-b735-451c-a2c0-ba33b1bc63c8',
    title: 'PHP',
    iconType: php,
  },
  {
    id: 'f39ae59b-bfff-4039-825e-0f0ce6738bb2',
    title: 'PYTHON',
    iconType: python,
  },
  {
    id: 'ac02da23-61dd-4775-b894-16fc5e1bae6a',
    title: 'JAVA',
    iconType: java,
  },
  {
    id: '73804338-90fe-4ec0-aefb-907aa815724d',
    title: 'KOTLIN',
    iconType: kotlin,
  },
];

export default languages;
