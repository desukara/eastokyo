import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

function safeImage(value: string | null) {
  if (!value) return '/images/editorial/asagaya-hero-01-desktop.jpg';
  let decoded = value;
  try { decoded = decodeURIComponent(value); } catch {}
  return decoded.startsWith('/images/editorial/') ? decoded : '/images/editorial/asagaya-hero-01-desktop.jpg';
}

function safeCaption(value: string | null) {
  if (!value) return 'EASTOKYO';
  let decoded = value;
  try { decoded = decodeURIComponent(value); } catch {}
  return decoded.trim().replace(/\s+/g, ' ').slice(0, 150) || 'EASTOKYO';
}

export async function GET(request: NextRequest) {
  const image = safeImage(request.nextUrl.searchParams.get('image'));
  const caption = safeCaption(request.nextUrl.searchParams.get('caption'));
  const imageUrl = new URL(image, request.nextUrl.origin).toString();

  return new ImageResponse(
    <div style={{width:'1200px',height:'630px',display:'flex',flexDirection:'column',background:'#11110f',padding:'28px',fontFamily:'Arial, Helvetica, sans-serif'}}>
      <div style={{display:'flex',flex:'1',minHeight:0,background:'#1b1b1b',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src={imageUrl} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
      </div>
      <div style={{height:'112px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'28px',padding:'18px 4px 0',color:'#f7f1e7'}}>
        <div style={{display:'flex',fontSize:'24px',fontWeight:800,letterSpacing:'0.04em',lineHeight:1.08,maxWidth:'900px'}}>{caption}</div>
        <div style={{display:'flex',fontSize:'22px',fontWeight:900,letterSpacing:'0.12em',whiteSpace:'nowrap'}}>EASTOKYO</div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
