import { routes } from "@/components/Navigation/Navigation";

export default function Home() {
    return (
        <div>
            {routes.map(section => {
                return (
                    <div key={section.id} id={section.id}>
                        {section.component}
                    </div>
                )
            })}
            <div className="h-20" />
        </div>
    );
}
