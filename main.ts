// The Day in One Image — news-image-20261119 entry (Node 22, standard library only).
//
// The entry is a single picture: entry.png beside this file, a broadsheet front page that
// sums up the world news of Thursday 19 November 2026. The image was designed as an HTML
// page (design.html, kept in this repository as the design source) and rendered to PNG at
// exactly 1024x1024. This program's whole job is to hand that picture in: it copies
// entry.png to the output directory under the same name, creating the directory first.
//
// The grader runs the program with no network and a writable /output; locally,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is a plain byte-for-byte file copy, so two runs always write identical bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

console.log(`wrote ${target}`);
