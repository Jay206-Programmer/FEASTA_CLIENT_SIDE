import Link from 'next/link'

export default function pageNotFound(){
    return (
        <div className="container-fluid bg-gray-200 align-content-center" style={{height: "100vh",display: 'flex',alignItems: 'center',justifyContent: 'center',textAlign: 'center'}}>
            <div className="text-center align-content-between bg-light shadow-lg p-5">
                <div className="error mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 m-2">It looks like you found a glitch in the matrix...</p>
                <Link href='/'>
                    <a>&larr; Back to Dashboard</a>
                </Link>
            </div>
        </div>
    )
}