import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-heading text-base font-semibold">{profile.name}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{profile.footerTagline}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Designed with curiosity. Built with code. · © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <SocialLinks withEmail />
      </div>
    </footer>
  );
}
