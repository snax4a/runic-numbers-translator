import { extractPlaceValues } from '@/utils/numbers';

import { PlaceType, RunicRepresentation, TranslationResult } from '@/types';

export default class RunicTranslator {
  private readonly runicRepresentations: RunicRepresentation[];

  constructor(runicRepresentations: RunicRepresentation[]) {
    this.runicRepresentations = runicRepresentations;
  }

  getPlaceTypeMultiplier(placeType: PlaceType) {
    switch (placeType) {
      case 'ones':
        return 1;
      case 'tens':
        return 10;
      case 'hundreds':
        return 100;
      case 'thousands':
        return 1000;
      default:
        return 1;
    }
  }

  async findRepresentation(
    placeType: PlaceType,
    placeValue: number
  ): Promise<RunicRepresentation> {
    return new Promise((resolve, reject) => {
      const value = placeValue * this.getPlaceTypeMultiplier(placeType);

      const foundRepresentation = this.runicRepresentations.find(
        (runicRepresentation) => runicRepresentation.decimalValue === value
      );

      if (foundRepresentation) {
        resolve(foundRepresentation);
      }

      reject(new Error(`No representation found for ${placeValue} ${placeType}`));
    });
  }

  async translateAsync(numberToTranslate: number): Promise<TranslationResult> {
    if (numberToTranslate < 1 || numberToTranslate > 9999) {
      throw new Error('Number must be between 1 and 9999');
    }

    const [ones, tens, hundreds, thousands] = extractPlaceValues(numberToTranslate);

    const promiseArray = [];

    if (ones) promiseArray.push(this.findRepresentation('ones', ones));
    if (tens) promiseArray.push(this.findRepresentation('tens', tens));
    if (hundreds) promiseArray.push(this.findRepresentation('hundreds', hundreds));
    if (thousands) promiseArray.push(this.findRepresentation('thousands', thousands));

    const allResults = await Promise.all(promiseArray);

    return allResults.map((result) => result.pathCommands);
  }
}
