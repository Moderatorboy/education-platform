export default function Card({ title, img, onClick, subtitle }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="w-full aspect-[16/10]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
