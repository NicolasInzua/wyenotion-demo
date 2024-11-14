export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-b-indigo-500" />
    </div>
  );
}