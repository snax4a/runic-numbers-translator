import { useCallback, useState } from 'react';

import { runicRepresentations } from '@/data/runic-representations';

import RunicTranslator from '@/features/translator/services/RunicTranslator';

import { TranslationResult } from '@/types/index';

export default function useRunicTranslator() {
  const [translationResult, setTranslationResult] = useState<TranslationResult>();

  const translator = new RunicTranslator(runicRepresentations);

  const translateAsync = useCallback(async (numberToTranslate: number) => {
    const result = await translator.translateAsync(numberToTranslate);
    setTranslationResult(result);
  }, []);

  return { translateAsync, translationResult };
}
