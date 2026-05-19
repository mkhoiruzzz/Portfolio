import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    slug?: string;
    link?: string;
    date?: string;
}

export default function ProjectCard({ title, description, imageUrl, slug, link, date = "2025", className = "", thumbnailClassName = "" }: ProjectCardProps & { className?: string, thumbnailClassName?: string }) {
    return (
        <div role="listitem" className={`modal-wrapper project w-dyn-item ${className}`}>
            <div className="modal-header">
                <div className="button-circles-wrap">
                    <div className="button-circle"></div>
                    <div className="button-circle"></div>
                </div>
                <div className="flex-center">
                    <div>{date}</div>
                    <div>-project.html</div>
                </div>
            </div>
            <div style={{ backgroundImage: `url("${imageUrl}")` }} className={`modal-thumbnail ${thumbnailClassName}`}></div>
            <div className="modal-body">
                <h3>{title}</h3>
                <p>{description}</p>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="button w-button lift-on-hover">View project</a>
                ) : (
                    slug && <Link href={`/project/${slug}`} className="button w-button lift-on-hover">View project</Link>
                )}
            </div>
        </div>
    );
}
