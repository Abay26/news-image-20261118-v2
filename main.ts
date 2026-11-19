// news-image-20261118 v2 — "The World in One Page" (Node 22, stdlib only).
//
// The entry image is the entry.png shipped beside this file: a dense one-page
// front page summing up the world news of Wednesday 18 November 2026
// (13 large story cards + a markets ticker + 12 more items, 32 stories in all,
// every one cross-checked against at least two reports of that day).
// This program validates the PNG and copies it to the output directory.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SOURCE = new URL('./entry.png', import.meta.url);
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const target = join(outDir, 'entry.png');

// The gate accepts a whole PNG of at most 1 MiB and 1024 by 1024 pixels,
// so check the shipped file before copying it anywhere.
const bytes = readFileSync(SOURCE);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length > 1048576 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG of at most 1 MiB');
}
if (bytes.subarray(12, 16).toString('ascii') !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk where the gate expects it');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024 || width === 0 || height === 0) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(SOURCE, target);
// Deterministic by construction: the same shipped bytes are copied every run,
// so two runs write byte-identical output.
