/* tslint:disable */
/* eslint-disable */
/**
* Type used on the JS side to convert screen coordinates to chart
* coordinates.
*/
export class Chart {
  free(): void;
/**
* Draw provided power function on the canvas element using it's id.
* Return `Chart` struct suitable for coordinate conversion.
* @param {string} canvas_id
* @param {number} power
* @returns {Chart}
*/
  static power(canvas_id: string, power: number): Chart;
/**
* @param {string} canvas_id
* @param {string} data
* @returns {Chart}
*/
  static test_plot(canvas_id: string, data: string): Chart;
/**
* Draw Mandelbrot set on the provided canvas element.
* Return `Chart` struct suitable for coordinate conversion.
* @param {HTMLCanvasElement} canvas
* @returns {Chart}
*/
  static mandelbrot(canvas: HTMLCanvasElement): Chart;
/**
* @param {HTMLCanvasElement} canvas
* @param {number} pitch
* @param {number} yaw
*/
  static plot3d(canvas: HTMLCanvasElement, pitch: number, yaw: number): void;
/**
* This function can be used to convert screen coordinates to
* chart coordinates.
* @param {number} x
* @param {number} y
* @returns {Point | undefined}
*/
  coord(x: number, y: number): Point | undefined;
}
/**
* Result of screen to chart coordinates conversion.
*/
export class Point {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}
