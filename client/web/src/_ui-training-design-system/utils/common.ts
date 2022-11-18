import {parseColorHexRGB} from '@microsoft/fast-colors';
import {PaletteRGB, SwatchRGB} from '@microsoft/fast-components';
import type {FoundationElementDefinition} from '@microsoft/fast-foundation';

export const paletteFromHex = (hexColor: string) =>
  PaletteRGB.from(SwatchRGB.from(parseColorHexRGB(hexColor)));

const defaultExclusions = ['baseClass', 'baseName', 'shadowOptions', 'styles', 'template'];
export const getDefaultConfig = (
  definition: Partial<FoundationElementDefinition>,
  exclusions = defaultExclusions,
) => {
  const keys = Object.keys(definition).filter(k => !exclusions.includes(k));
  return keys.reduce((accumulator, key) => {
    accumulator[key] = definition[key];
    return accumulator;
  }, {});
};

export const getExports = (registrationFunction) => {
  const {definition} = registrationFunction();
  const {shadowOptions, styles, template} = definition;
  const defaultConfig = getDefaultConfig(definition);

  return {shadowOptions, styles, template, defaultConfig};
};
