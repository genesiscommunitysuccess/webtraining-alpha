import { DesignTokensConfig } from '@genesislcap/foundation-ui';
import { accentPaletteValue, baseLayerLuminanceValue, neutralPaletteValue } from '../values/color';
import { strokeWidthValue } from './misc';
import { designUnitValue, densityValue, controlCornerRadiusValue } from './sizing';
import {
  bodyFontValue,
  typeRampBaseFontSizeValue,
  typeRampBaseLineHeightValue,
} from './typography';

export const designTokens: DesignTokensConfig = {
  design_tokens: {
    color: {
      accent: {
        $value: accentPaletteValue.source.toColorString(),
        $type: 'color',
      },
      neutral: {
        $value: neutralPaletteValue.source.toColorString(),
        $type: 'color',
      },
    },
    fontFamily: {
      bodyFont: {
        $value: bodyFontValue,
        $type: 'fontFamily',
      },
    },
    typography: {
      baseFontSize: {
        $value: typeRampBaseFontSizeValue,
        $type: 'dimension',
      },
      baseLineHeight: {
        $value: typeRampBaseLineHeightValue,
        $type: 'dimension',
      },
    },
    mode: {
      luminance: {
        $value: baseLayerLuminanceValue,
        $type: 'number',
      },
    },
    style: {
      density: {
        $value: densityValue,
        $type: 'number',
      },
      borderRadius: {
        $value: controlCornerRadiusValue,
        $type: 'number',
      },
      strokeWidth: {
        $value: strokeWidthValue,
        $type: 'number',
      },
    },
    space: {
      designUnit: {
        $value: designUnitValue,
        $type: 'number',
      },
    },
  },
};
