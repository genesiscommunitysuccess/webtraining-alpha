import {getWebRGBA} from '@genesislcap/foundation-zero';
import {parseColorHexRGB} from '@microsoft/fast-colors';
import {ColorHEX, TrainingExampleColorHEX} from './color.hex';

const trainingGreenRGB = parseColorHexRGB(TrainingExampleColorHEX.green)!;
export const primaryBlueWebRGBA = (alpha: number = 1.0) => {
  return getWebRGBA(trainingGreenRGB, alpha);
};

const whiteRGB = parseColorHexRGB(ColorHEX.white)!;
export const whiteWebRGBA = (alpha: number = 1.0) => {
  return getWebRGBA(whiteRGB, alpha);
};
