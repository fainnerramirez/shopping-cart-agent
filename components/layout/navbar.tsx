import ButtonGithub from "../ui/button-github";

export default function Navbar() {
    return (
        <div className="w-[90%] m-auto mb-14 mt-5 neumorfismo-forward p-1">
            <div className="flex items-center justify-around">
                <ButtonGithub />
                <div className="text-gray-800">
                    <input className="neumorfismo-input w-[600px]!" placeholder="buscar producto" />
                </div>
            </div>
        </div>
    )
}