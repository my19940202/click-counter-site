import Content from '@/posts/term-of-use.mdx'

export async function getStaticPaths() {
    // build时自动生成对应的页面提前 server渲染好 对SEO友好
    const langs = ['zh', 'en'];
    const paths = langs.map(lang => ({
        params: { lang }
    }));
    return {
        paths,
        fallback: false
    };
}

export default async function Home({ params }) {
    return (
        <div className="max-w-[800px] mx-auto text-lg text-left pb-4">
            <Content />
        </div>
    );
}
