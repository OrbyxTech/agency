

interface RootObject {
    data: Data3;
    meta: Meta;
}

interface Meta {
    [prop: string]: any;
}

interface Data3 {
    id: number;
    attributes: Attributes3;
}

interface Attributes3 {
    heroTitle: string;
    heroText: string;
    showAboutUsSection: boolean;
    aboutUs__title: string;
    aboutUs__text: string;
    showServicesSection: boolean;
    services__title: string;
    services__text: string;
    createdAt: string;
    updatedAt: string;
    showCountDownSection: boolean;
    showProjectsSection: boolean;
    projects__title: string;
    projects__text?: any;
    showWhyChooseUsSection: boolean;
    whyChooseUs__title: string;
    whyChooseUs__text: string;
    whyChooseUs__reasons: string[];
    showCta1Section: boolean;
    cta1__bgColor: string;
    cta1__title: string;
    cta1__btnText: string;
    cta1__showBtn: boolean;
    heroImage: HeroImage;
    aboutUs__image: AboutUsimage;
    ourServices: OurService[];
    countDown: CountDown[];
}

interface CountDown {
    id: number;
    title: string;
    value: number;
}

interface OurService {
    id: number;
    title: string;
    text: string;
}

interface AboutUsimage {
    data: Data2;
}

interface Data2 {
    id: number;
    attributes: Attributes2;
}

interface Attributes2 {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
}

interface Formats2 {
    thumbnail: Thumbnail;
    small: Thumbnail;
    large: Thumbnail;
    medium: Thumbnail;
}

interface HeroImage {
    data: Data;
}

interface Data {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
}

interface Formats {
    thumbnail: Thumbnail;
    medium: Thumbnail;
    small: Thumbnail;
}

interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}


export default function getHomePagedetails(): Promise<RootObject> {
    return new Promise(
        (resolve, reject) => {
            (async () => {
                try {
                    const res = await fetch(
                        import.meta.env.VITE_PUBLIC_SERVER_BASE_URL + import.meta.env.VITE_PUBLIC_GET_HOME_PAGE_DETAILS_ENDPOINT
                    )

                    console.log(import.meta.env.VITE_PUBLIC_SERVER_BASE_URL + import.meta.env.VITE_PUBLIC_GET_HOME_PAGE_DETAILS_ENDPOINT)

                    if (res.ok) {
                        resolve(await res.json())
                    }
                    else {
                        reject(undefined)
                    }
                } catch (error) {
                    reject(undefined)
                }
            })()
        }
    )
}