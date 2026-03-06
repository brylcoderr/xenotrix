import { servicesData } from '@/lib/services-data';
import ServiceContent from '@/components/ServiceContent';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | XenotriX Digital Engineering`,
        description: service.heroDesc,
        keywords: [service.title, "digital growth", "XenotriX", "engineering solutions"],
        openGraph: {
            title: `${service.title} | Premium Growth Solutions`,
            description: service.heroDesc,
            type: 'article',
        }
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ServiceContent slug={resolvedParams.slug} />;
}
