export type ResponseItem = {
  ChunkStart: number,
  Bars: Bar[],
}

export type Bar = {
  Time: number,
  Open: number,
  High: number,
  Low: number,
  Close: number,
  TickVolume: number,
}