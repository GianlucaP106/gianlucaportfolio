import Hero from "@/components/Hero/Hero";
import SkillSection from "@/components/SkillSection/SkillSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";

export default function Home() {
    return (
        <div>
            <Hero/>
            <SkillSection />
            <ExperienceSection />
            <div className={"h-20"}></div>
        </div>
    );
}
