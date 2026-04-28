import { motion } from 'motion/react';
import { ArrowLeft, Camera, Share2, Download, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ARManager } from '../utils/arManager';

export default function VirtualTryOn() {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arManagerRef = useRef<ARManager | null>(null);

  const startCamera = async () => {
    setIsLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720, facingMode: 'user' } 
      });
      
      if (videoRef.current && canvasRef.current) {
        videoRef.current.srcObject = stream;
        
        // Initialize AR Manager
        arManagerRef.current = new ARManager(videoRef.current, canvasRef.current);
        // Default frame
        arManagerRef.current.setFrame('https://i.ibb.co/L89YPhs/aviator-frame.png'); 
        
        await arManagerRef.current.start();
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Camera access denied. Please enable camera to use the Virtual Try-On feature.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (arManagerRef.current) {
        arManagerRef.current.stop();
      }
    };
  }, []);

  const selectFrame = (imgUrl: string) => {
    if (arManagerRef.current) {
      arManagerRef.current.setFrame(imgUrl);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header */}
      <div className="p-6 flex justify-between items-center border-b border-white/10">
        <Link to="/" className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-display font-bold uppercase tracking-widest">Virtual <span className="text-gold-500">Mirror</span></h1>
          <p className="text-[10px] text-pearl/50 uppercase tracking-widest">AI Powered Fitting Room</p>
        </div>
        <div className="flex gap-4">
          <Share2 size={20} className="text-pearl/60 cursor-pointer" />
          <Download size={20} className="text-pearl/60 cursor-pointer" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,350px] h-[calc(100vh-100px)]">
        {/* Main Preview */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {!isCameraActive ? (
            <div className="text-center space-y-6 px-4">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                {isLoading ? <RefreshCw className="text-gold-500 animate-spin" size={40} /> : <Camera size={40} className="text-gold-500" />}
              </div>
              <h2 className="text-2xl font-display uppercase tracking-widest">Ready to find your look?</h2>
              <p className="text-pearl/60 max-w-sm mx-auto text-sm">Allow camera access to virtually try on our premium collection in real-time.</p>
              <button 
                onClick={startCamera}
                disabled={isLoading}
                className="bg-gold-500 text-navy-900 px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl disabled:opacity-50"
              >
                {isLoading ? 'Calibrating AI...' : 'Start Camera'}
              </button>
            </div>
          ) : (
            <>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover transform scale-x-[-1]"
              />
              <canvas 
                ref={canvasRef} 
                width={1280} 
                height={720} 
                className="absolute inset-0 w-full h-full transform scale-x-[-1]" 
              />
              
              <div className="absolute bottom-8 flex gap-4">
                 <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-navy-900 shadow-xl hover:scale-110 transition-transform">
                   <div className="w-10 h-10 border-2 border-navy-900 rounded-full" />
                 </button>
              </div>
            </>
          )}

          {/* Guidelines */}
          <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
             <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2">Instructions</p>
             <ul className="text-[10px] text-pearl/80 space-y-1 font-medium">
               <li>• Keep your face centered</li>
               <li>• Ensure good lighting</li>
               <li>• Remove existing glasses</li>
             </ul>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="bg-navy-800 border-l border-white/5 flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-4">Select Frame Style</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Aviator', img: 'https://i.ibb.co/L89YPhs/aviator-frame.png' },
                { name: 'Cat-Eye', img: 'https://i.ibb.co/qr0445y/cateye-frame.png' },
                { name: 'Wayfarer', img: 'https://i.ibb.co/mb9X85z/wayfarer-frame.png' },
                { name: 'Modern', img: 'https://i.ibb.co/0XzZ4yV/modern-frame.png' }
              ].map((style) => (
                 <button 
                  key={style.name} 
                  onClick={() => selectFrame(style.img)}
                  className="bg-white/5 border border-white/10 py-3 rounded-sm text-[10px] uppercase font-bold tracking-widest hover:border-gold-500 transition-all font-display"
                 >
                   {style.name}
                 </button>
              ))}
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-pearl/40 mb-4">Currently Trying</p>
              <div className="bg-white/5 p-4 rounded-sm border border-white/10 flex gap-4">
                <div className="w-16 h-16 bg-navy-900 flex items-center justify-center rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase">Aviator Gold</h4>
                  <p className="text-xs text-gold-400 font-bold mt-1">Rs. 18,500</p>
                  <Link to="/shop" className="text-[10px] uppercase text-pearl/40 underline mt-2 inline-block">Product Details</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-navy-900">
             <button className="w-full bg-gold-500 text-navy-900 py-4 text-xs font-bold uppercase tracking-[.2em] shadow-xl hover:bg-white transition-all">
               Add to Cart
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
