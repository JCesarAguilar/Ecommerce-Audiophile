export function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-strong border-t-transparent"></div>
      <p className="text-gray-medium text-sm">Cargando...</p>
    </div>
  );
}

export default Loading;
