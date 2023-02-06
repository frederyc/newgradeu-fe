export default class ChromaticsService {
  /**
   * [Generate with @ChatGPT] A function that adjust a hexColor's brightness and returns the response
   * @param hexColor - the color in hex format
   * @param percentage - the percentage with which the color will be transformed. It should have values in the range
   * [-100, 100]. "20", will return the color brightened by 20%, "-30" will return the color darkened by 30%
   */
  public static adjustColorLightness(hexColor: string, percentage: number): string {
    // Cut excess percentage
    if (Math.abs(percentage) > 100)
      percentage = percentage < 0 ? -100 : 100;

    // Convert the hex color to RGB
    let r: number = parseInt(hexColor.substring(1, 3), 16);
    let g: number = parseInt(hexColor.substring(3, 5), 16);
    let b: number = parseInt(hexColor.substring(5, 7), 16);

    // Lighten/Darken the color by the specified percentage
    if (percentage < 0) {
      r = Math.floor(r * (1 - (-percentage) / 100));
      g = Math.floor(g * (1 - (-percentage) / 100));
      b = Math.floor(b * (1 - (-percentage) / 100));
    } else {
      r = Math.round(r + (255 - r) * (percentage / 100));
      g = Math.round(g + (255 - g) * (percentage / 100));
      b = Math.round(b + (255 - b) * (percentage / 100));
    }

    // Convert the RGB color back to hex
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  public static getTopLeftPixelColor(image: HTMLImageElement | null): string | null {
    if (!image) return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not available');

    ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 1);
    const pixel: Uint8ClampedArray = ctx.getImageData(0, 0, 1, 1).data;

    return `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;
  }
}
