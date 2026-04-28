import { FaceMesh } from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';

export class ARManager {
  private faceMesh: FaceMesh;
  private camera: any;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private videoElement: HTMLVideoElement;
  private frameImage: HTMLImageElement | null = null;

  constructor(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
    this.videoElement = video;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    
    this.faceMesh = new FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    this.faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    this.faceMesh.onResults(this.onResults.bind(this));
  }

  public setFrame(imageUrl: string) {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      this.frameImage = img;
    };
  }

  private onResults(results: any) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0 && this.frameImage) {
      const landmarks = results.multiFaceLandmarks[0];
      
      // Calculate glasses position based on face landmarks
      // Landmark 168: Bridge of nose
      // Landmark 21 & 251: Temples
      const leftEyeInner = landmarks[133];
      const rightEyeInner = landmarks[362];
      const noseBridge = landmarks[168];
      const leftTemple = landmarks[127];
      const rightTemple = landmarks[356];

      const width = Math.abs(rightTemple.x - leftTemple.x) * this.canvas.width * 1.2;
      const height = width * (this.frameImage.height / this.frameImage.width);
      
      const centerX = noseBridge.x * this.canvas.width;
      const centerY = noseBridge.y * this.canvas.height;

      // Calculate rotation
      const deltaX = rightTemple.x - leftTemple.x;
      const deltaY = rightTemple.y - leftTemple.y;
      const angle = Math.atan2(deltaY, deltaX);

      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(angle);
      
      // Draw the glasses
      this.ctx.drawImage(
        this.frameImage,
        -width / 2,
        -height / 2,
        width,
        height
      );
      
      this.ctx.restore();
    }
  }

  public async start() {
    this.camera = new cam.Camera(this.videoElement, {
      onFrame: async () => {
        await this.faceMesh.send({ image: this.videoElement });
      },
      width: 1280,
      height: 720,
    });
    await this.camera.start();
  }

  public stop() {
    if (this.camera) this.camera.stop();
  }
}
