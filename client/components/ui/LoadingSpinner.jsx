export default function LoadingSpinner({ size = 'lg', className = '' }) {
  return (
    <div className={`flex justify-center items-center py-16 ${className}`}>
      <span className={`loading loading-spinner text-primary loading-${size}`} />
    </div>
  )
}
