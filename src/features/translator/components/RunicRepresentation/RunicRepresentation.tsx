import React from 'react';

import Button from '@/components/ui/Button';

import { createInvisibleTempElement } from '@/utils/DOM';
import { exportHtmlToImage } from '@/utils/images';
import { generatePath } from '@/utils/svg-helpers';

import { PathCommand } from '@/types';

import styles from './RunicRepresentation.module.css';

const EXPORTED_FILE_NAME = 'runic-representation.png';

interface RunicRepresentationProps {
  pathCommands: PathCommand[];
}

export default function RunicRepresentation({ pathCommands }: RunicRepresentationProps) {
  const runeRef = React.useRef<HTMLElement>(null);

  const handleExportClick = async () => {
    if (runeRef.current) {
      /* Clone element so further manipulations won't be visible for the user */
      const elementToExport = runeRef.current.cloneNode(true) as HTMLElement;
      const tempElement = createInvisibleTempElement('div', elementToExport);
      const svgElement = elementToExport.querySelector('svg') as SVGSVGElement;

      /* Remove blur effect from svg before exporting */
      svgElement.setAttribute('style', 'filter: none');

      await exportHtmlToImage(elementToExport, EXPORTED_FILE_NAME);

      tempElement.remove();
    }
  };

  return (
    <article className={styles.container} id='runic-representation' ref={runeRef}>
      <svg width='236' height='200' viewBox='-48 -1 100 100'>
        <path className={styles.path} d={generatePath(pathCommands)} />
      </svg>

      <div className={styles.overlay}>
        <Button onClick={handleExportClick}>EXPORT AS IMAGE</Button>
      </div>
    </article>
  );
}
