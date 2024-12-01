import OtherTool from "@/interfaces/OtherTool";
import VSCodeIcon from "@/modules/home/components/icons/vs-code";
import FigmaIcon from "@/modules/home/components/icons/figma";
import PhotoshopIcon from "@/modules/home/components/icons/photoshop";
import IllustratorIcon from "@/modules/home/components/icons/illustrator";
import PremiereIcon from "@/modules/home/components/icons/premiere";
import AfterEffects from '../modules/home/components/icons/after-effects';
import CubaseIcon from "@/modules/home/components/icons/cubase";
import WordIcon from "@/modules/home/components/icons/word";
import ExcelIcon from "@/modules/home/components/icons/excel";

const otherTools: OtherTool[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'VSCode',
    icon: VSCodeIcon,
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Figma',
    icon: FigmaIcon,
  },
  {
    id: '9b2e5d6c-8f7b-4a2d-9c3e-5f6b7a8c9d0e',
    title: 'Photoshop',
    icon: PhotoshopIcon,
  },
  {
    id: '3f2a1b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c',
    title: 'Illustrator',
    icon: IllustratorIcon,
  },
  {
    id: '7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b',
    title: 'Premiere',
    icon: PremiereIcon,
  },
  {
    id: '4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d',
    title: 'After Effects',
    icon: AfterEffects,
  },
  {
    id: '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
    title: 'Word',
    icon: WordIcon,
  },
  {
    id: '5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d',
    title: 'Excel',
    icon: ExcelIcon,
  },
  {
    id: '8c9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f',
    title: 'Cubase',
    icon: CubaseIcon,
  },
];

export default otherTools;
