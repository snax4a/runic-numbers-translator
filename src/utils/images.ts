import { html2canvas } from '@/lib/html2canvas';

import { createInvisibleTempElement } from '@/utils/DOM';

export async function exportHtmlToImage(element: HTMLElement, imageFileName: string) {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
}

export function downloadImage(blob: string, fileName: string) {
  const downloadLink = createInvisibleTempElement('a');
  downloadLink.setAttribute('download', fileName);
  downloadLink.setAttribute('href', blob);
  downloadLink.click();
  downloadLink.remove();
}
