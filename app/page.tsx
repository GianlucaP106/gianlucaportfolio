import Hero from "@/components/Hero/Hero";
import SkillSection from "@/components/SkillSection/SkillSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
    return (
        <div>
            <Hero/>
            <SkillSection />
            <ExperienceSection />
            <ContactSection />
            <div className={"h-20"}></div>
        </div>
    );
}
