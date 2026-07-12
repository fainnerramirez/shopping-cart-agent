import ButtonGithub from "../ui/button-github";

export default function Navbar() {
    return (
        <div className="w-[90%] m-auto justify-center items-center mb-14 mt-5 neumorfismo-forward p-1">
            <div className="flex items-center justify-center">
                <ButtonGithub />
                <div className="flex items-center w-[100%] m-auto text-gray-600">
                    <input className="neumorfismo-input" placeholder="buscar producto" />
                </div>
            </div>
        </div>
    )
}