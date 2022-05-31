export default function Button({name, urlImage, color}) {
    return (
        <button className={`flex space-x-2 items-center ${color} py-3 px-6 text-sm rounded-lg shadow-lg hover:shadow-xl transition duration-200`}><img src={urlImage} alt="download" /> <span>{name}</span></button>
    )
}