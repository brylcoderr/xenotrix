import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'XenotriX Logo';
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
    return new ImageResponse(
        (
            // ImageResponse pixelated element
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}
            >
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src="http://localhost:3000/images/logo.png"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
