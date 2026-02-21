import Title from "./components/Title"
import NavLinks from "./components/NavLinks"
import VersionBadge from "./components/VersionBadge"
import LoginButton from "./components/LoginButton"
import SubscribeButton from "./components/SubscribeButton"

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-background border-b border-border flex items-center justify-between px-4">
            <div>
                <Title />
            </div>
            <div>
                <NavLinks />
            </div>
            <div className="flex items-center gap-2">
                {/* <VersionBadge /> */}
                <LoginButton />     
                <SubscribeButton />          
            </div>
        </div>
    )
}