import Image from 'next/image';

export default function PromotionalSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 w-full z-10 relative flex justify-center">
      <div className="w-full max-w-lg aspect-[3/1] bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 group cursor-pointer hover:shadow-lg transition-all">
         <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 font-body text-sm p-4 text-center">
           <span className="mb-2 text-xl">✨</span>
           <span className="font-medium">Promotional Banner</span>
           <span className="text-xs opacity-70 mt-1">Upload Landscape Image</span>
         </div>
      </div>
    </div>
  );
}
