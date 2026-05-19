"use client";
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        date: "2020-04-07",
        title: "What Will Website Be Like In 100 Years?",
        description: "Repudiandae error accusantium et asperiores veniam debitis.",
        imageUrl: "https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5d9deaa78561d2d9d562_1586191773518-image17.jpg",
        slug: "what-will-website-be-like-in-100-years",
        category: "Design",
        categorySlug: "design"
    },
    {
        id: 2,
        date: "2020-04-06",
        title: "15 Best Blogs To Follow About Web Design",
        description: "Laborum neque alias enim quo adipisci ipsam est voluptas.",
        imageUrl: "https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5d9d33bd30c36292799b_1586191773503-image3.jpg",
        slug: "15-best-blogs-to-follow-about-web-design",
        category: "Webflow",
        categorySlug: "webflow"
    },
    {
        id: 3,
        date: "2020-04-06",
        title: "Designers Who Changed the Web",
        description: "Laborum aut eligendi vel nemo rerum tempora et quae.",
        imageUrl: "https://cdn.prod.website-files.com/5e8b5d6cee4cf17b3ee15385/5e8b5dc4784510753ebec477_1586191812016-image13.jpg",
        slug: "designers-who-changed-the-web",
        category: "Webflow",
        categorySlug: "webflow"
    }
];

export default function BlogList() {
    const [zIndices, setZIndices] = useState<{ [key: number]: number }>({});
    const [maxZ, setMaxZ] = useState(1);

    const handleCardClick = (id: number) => {
        const newMax = maxZ + 1;
        setZIndices(prev => ({
            ...prev,
            [id]: newMax
        }));
        setMaxZ(newMax);
    };

    return (
        <div className="blog-posts-wrapper">
            <style jsx global>{`
                @media screen and (min-width: 991px) {
                  .click-to-top:nth-child(1) { top: 0px; right: 0px; position: relative; } /* Ensure positioning is explicit if needed, though webflow css might handle it */
                  .click-to-top:nth-child(2) { top: 100px; right: 0px; }
                  .click-to-top:nth-child(3) { left: 50px; top: 250px; right: 0px; }
                  .click-to-top:nth-child(4) { left: auto; top: 350px; right: 70px; }
                }
             `}</style>
            <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            role="listitem"
                            className="click-to-top w-dyn-item"
                            style={{
                                zIndex: zIndices[post.id] || 'auto',
                                position: 'relative' // Ensure z-index works. Webflow css might Set absolute, but we need to check. 
                                // Actually webflow.css might make them absolute or relative. 
                                // Looking at the original style, it targets .click-to-top:nth-child(...) by standard flow?
                                // Let's trust webflow.css for positioning mostly, but ensure z-index applies.
                            }}
                            onClick={() => handleCardClick(post.id)}
                        >
                            <div className="modal-wrapper">
                                <div className="modal-header">
                                    <div className="button-circles-wrap"><div className="button-circle"></div><div className="button-circle"></div></div>
                                    <div className="flex-center"><div>{post.date}</div><div>-blog.pdf</div></div>
                                </div>
                                <div style={{ backgroundImage: `url("${post.imageUrl}")` }} className="modal-thumbnail"></div>
                                <div className="modal-body">
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <div className="row-space-between">
                                        <Link href={`/post/${post.slug}`} className="button w-button">Read article</Link>
                                        <Link href={`/c/${post.categorySlug}`}>{post.category}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
